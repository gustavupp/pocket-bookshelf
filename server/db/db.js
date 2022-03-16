const mysql = require('mysql')

const db = mysql.createPool({
  connectionLimit: 100,
  user: 'b2caf6c8f260e5',
  host: 'us-cdbr-east-05.cleardb.net',
  password: '0a6d91fa',
  database: 'heroku_d4c34159e37c037',
})

module.exports = db
