import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const fastify = Fastify({
  logger: true
})

await fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'dist'),
  prefix: '/',
  decorateReply: false
})

await fastify.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
})

await fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'your-secret-key',
  sign: {
    expiresIn: '7d' // Token expires in 7 days
  }
})

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Simple database connection check
try {
  const connection = await pool.getConnection()
  console.log('Connected to MySQL server')
  connection.release()
} catch (error) {
  console.error('Database connection failed: ', error)
  process.exit(1)
}

// Authentication middleware
const authenticate = async (request, reply) => {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.code(401).send({ error: 'Unauthorized' })
  }
}

// Register a new user
fastify.post('/api/auth/register', async (request, reply) => {
  try {
    const { username, email, password, displayName } = request.body

    // Check if user already exists
    const [existingUsers] = await pool.query(
      'SELECT * FROM users WHERE username = ? OR email = ?',
      [username, email]
    )

    if (existingUsers.length > 0) {
      return reply.code(400).send({
        error: 'Username or email already exists'
      })
    }

    // Hash the password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Insert new user
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, display_name) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, displayName || username]
    )

    const userId = result.insertId

    // Get the newly created user
    const [users] = await pool.query(
      'SELECT id, username, email, display_name FROM users WHERE id = ?',
      [userId]
    )

    const user = users[0]

    // Generate JWT token
    const token = fastify.jwt.sign({
      id: user.id,
      username: user.username
    })

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      displayName: user.display_name,
      token
    }
  } catch (error) {
    console.error('Registration error:', error)
    reply.code(500).send({ error: 'Registration failed' })
  }
})

// Login user
fastify.post('/api/auth/login', async (request, reply) => {
  try {
    const { username, password } = request.body

    // Find user by username or email
    const [users] = await pool.query(
      'SELECT * FROM users WHERE username = ? OR email = ?',
      [username, username]
    )

    if (users.length === 0) {
      return reply.code(401).send({ error: 'Invalid credentials' })
    }

    const user = users[0]

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return reply.code(401).send({ error: 'Invalid credentials' })
    }

    // Generate JWT token
    const token = fastify.jwt.sign({
      id: user.id,
      username: user.username
    })

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      displayName: user.display_name,
      token
    }
  } catch (error) {
    console.error('Login error:', error)
    reply.code(500).send({ error: 'Login failed' })
  }
})

// Validate the token
fastify.get('/api/auth/validate', { preHandler: authenticate }, (request, reply) => {
  return { valid: true, user: request.user }
})

// Get all leaderboards
fastify.get('/api/leaderboard', async (request, reply) => {
  try {
    // Get leaderboard data for all domains
    const domains = ['full', 'people', 'process', 'business']
    const leaderboards = {}

    for (const domain of domains) {
      const [scores] = await pool.query(`
        SELECT 
          u.username, 
          u.display_name as displayName, 
          l.score,
          RANK() OVER (ORDER BY l.score DESC) as \`rank\`
        FROM leaderboard l
        JOIN users u ON l.user_id = u.id
        WHERE l.domain = ?
        ORDER BY l.score DESC
      `, [domain])

      leaderboards[domain] = scores.map(entry => ({
        userName: entry.displayName || entry.username,
        score: entry.score,
        rank: entry.rank
      }))
    }

    return leaderboards
  } catch (error) {
    console.error('Error fetching leaderboards:', error)
    reply.code(500).send({ error: 'Failed to fetch leaderboards' })
  }
})

// Add score to leaderboard
fastify.post('/api/leaderboard/add', { preHandler: authenticate }, async (request, reply) => {
  try {
    const { score, domain = 'full' } = request.body
    const userId = request.user.id

    // Insert score
    await pool.query(
      'INSERT INTO leaderboard (user_id, domain, score) VALUES (?, ?, ?)',
      [userId, domain, score]
    )

    return { success: true }
  } catch (error) {
    console.error('Error adding score:', error)
    reply.code(500).send({ error: 'Failed to add score' })
  }
})

// Clear leaderboard for a domain
fastify.delete('/api/leaderboard/clear/:domain', { preHandler: authenticate }, async (request, reply) => {
  try {
    const { domain } = request.params

    // Ensure user is an admin (you might want to add admin role to users table)
    // For now, we'll allow any authenticated user to clear leaderboards

    // Delete leaderboard entries for the domain
    await pool.query('DELETE FROM leaderboard WHERE domain = ?', [domain])

    return { success: true }
  } catch (error) {
    console.error('Error clearing leaderboard:', error)
    reply.code(500).send({ error: 'Failed to clear leaderboard' })
  }
})

// Questions endpoints

fastify.get('/api/questions', async (request, reply) => {
  try {
    const [questions] = await pool.query(`
      SELECT q.id, q.question_text as question, q.explanation as correctAnswerExplanation, 
             q.type, t.name as domain
      FROM questions q
      LEFT JOIN question_topics qt ON q.id = qt.question_id
      LEFT JOIN topics t ON qt.topic_id = t.id
    `)

    for (let question of questions) {
      const [options] = await pool.query(`
        SELECT option_text as text, is_correct as isCorrect
        FROM options
        WHERE question_id = ?
        ORDER BY option_order
      `, [question.id])

      question.options = options
    }

    return questions
  } catch (error) {
    reply.code(500).send({ error: error.message })
  }
})

fastify.get('/api/questions/:domain', async (request, reply) => {
  try {
    const domain = request.params.domain

    if (domain === 'full') {
      const response = await fastify.inject({
        method: 'GET',
        url: '/api/questions'
      })
      return JSON.parse(response.payload)
    }

    let topicName
    if (domain === 'people') {
      topicName = 'People'
    } else if (domain === 'process') {
      topicName = 'Process'
    } else if (domain === 'business') {
      topicName = 'Business Environment'
    } else {
      return reply.code(400).send({ error: 'Invalid domain' })
    }

    const [questions] = await pool.query(`
      SELECT q.id, q.question_text as question, q.explanation as correctAnswerExplanation,
             q.type, t.name as domain
      FROM questions q
      JOIN question_topics qt ON q.id = qt.question_id
      JOIN topics t ON qt.topic_id = t.id
      WHERE t.name = ?
    `, [topicName])

    for (let question of questions) {
      const [options] = await pool.query(`
        SELECT option_text as text, is_correct as isCorrect
        FROM options
        WHERE question_id = ?
        ORDER BY option_order
      `, [question.id])

      question.options = options
    }

    return questions
  } catch (error) {
    reply.code(500).send({ error: error.message })
  }
})

fastify.setNotFoundHandler((request, reply) => {
  if (request.raw.url.startsWith('/quiz-app/')) {
    const accept = request.headers.accept || '';
    if (accept.includes('text/html')) {
      return reply.sendFile('index.html');
    }
  }
  reply.code(404).send({ error: 'Resource not found' });
})

const start = async () => {
  try {
    const PORT = process.env.PORT || 3000
    const address = await fastify.listen({
      port: PORT,
      host: process.env.SERVER_IP || '0.0.0.0'
    })
    console.log(`Server is running on ${address}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()