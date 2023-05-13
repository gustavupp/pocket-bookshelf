const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  connectionLimit: 100,
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOSTNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

module.exports = db
