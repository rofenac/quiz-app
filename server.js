import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
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

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

try {
  const connection = await pool.getConnection()
  console.log('Connected to MySQL server')
  connection.release()
} catch (error) {
  console.error('Database connection failed: ', error)
  process.exit(1)
}

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
        url: '/quiz-app/api/questions'
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
  if (request.url.startsWith('/quiz-app/')) {
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