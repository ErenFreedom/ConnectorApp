// config/db.js
const mysql = require('mysql2');
require('dotenv').config();

// Create the RDS connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err) => {
  if (err) {
    console.error('Error connecting to RDS database:', err);
  } else {
    console.log('Connected to RDS database');
  }
});

module.exports = db;
