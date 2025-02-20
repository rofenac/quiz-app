import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

const app = express()

// Configure CORS to accept all origins
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())

// Create a connection to the MySQL server using .env variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

// Connect to MySQL and log the status
db.connect(error => {
  if (error) {
    console.error('Database connection failed: ', error)
    return
  }
  console.log('Connected to MySQL server')
})

// Define an API endpoint to fetch data from a MySQL table
app.get('/users', (req, res) => {
  // Replace 'your_table' with the actual table name
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message })
    } else {
      res.json(results)
    }
  })
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://${process.env.SERVER_IP}:${PORT}`)
})