const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

/****************************mysql connection*********************************/
const mysql = require('mysql')
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password123*',
  database: 'pocket-bookshelf',
})
mysql: db.connect()
/****************************mysql connection*********************************/

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`)
})

app.get('/api/get-books', (req, res) => {
  db.query('SELECT * FROM books', (err, result) => {
    if (err) console.log(err)
    else {
      res.send(result)
    }
  })
})
