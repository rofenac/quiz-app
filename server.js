import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

// Load environment variables
dotenv.config()

// Create Fastify instance
const fastify = Fastify({
  logger: true
})

// Register CORS plugin
await fastify.register(fastifyCors, {
  origin: true // Allow all origins
})

// Create a connection pool to the MySQL server
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Test database connection
try {
  const connection = await pool.getConnection()
  console.log('Connected to MySQL server')
  connection.release()
} catch (error) {
  console.error('Database connection failed: ', error)
  process.exit(1)
}

// Define an API endpoint to fetch data from a MySQL table
fastify.get('/users', async (request, reply) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users')
    return rows
  } catch (error) {
    reply.code(500).send({ error: error.message })
  }
})

// Add this route to your server.js to extract db schema
fastify.get('/schema', async (request, reply) => {
  try {
    // Get table information
    const [tables] = await pool.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = ?
    `, [process.env.DB_NAME]);

    const schema = {};

    // For each table, get column information
    for (const table of tables) {
      const tableName = table.TABLE_NAME;
      const [columns] = await pool.query(`
        SELECT COLUMN_NAME, DATA_TYPE, COLUMN_KEY, IS_NULLABLE, COLUMN_DEFAULT
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
      `, [process.env.DB_NAME, tableName]);

      schema[tableName] = columns;
    }

    return schema;
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
});

// Start the server
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