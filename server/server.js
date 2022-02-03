const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

/****************************mysql connection*********************************/
const mysql = require('mysql')
//const { response } = require('express')
const db = mysql.createConnection({
  user: 'b2caf6c8f260e5',
  host: 'us-cdbr-east-05.cleardb.net',
  password: '0a6d91fa',
  database: 'heroku_d4c34159e37c037',
})
//mysql: db.connect()
/****************************mysql connection*********************************/

const PORT = process.env.PORT || 3002
app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`Server Listening on port ${PORT}`)
})

//get request endpoint
app.get('/api/get-books/:userId', (req, res) => {
  const { userId } = req.params

  db.query('SELECT * FROM books WHERE userId = ?', userId, (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
})

//post request endpoint
app.post('/api/add-book', (req, res) => {
  let {
    userId,
    id,
    title,
    subtitle,
    authors,
    categories,
    thumbnail,
    description,
    language,
    pageCount,
    publishedDate,
    buyLink,
    identifier,
    email,
  } = req.body
  description = description.replaceAll("'", '`')
  db.query(
    'INSERT INTO books (userId, id, title, subtitle, authors, categories, thumbnail, description,language,   pageCount, publishedDate, buyLink, identifier, email) VALUES (?, ? , ?, ?, ?, ?, ? ,? ,?, ? , ? ,?, ? ,?)',
    [
      userId,
      id,
      title,
      subtitle,
      authors,
      categories,
      thumbnail,
      description,
      language,
      pageCount,
      publishedDate,
      buyLink,
      identifier,
      email,
    ],
    (err, result) => {
      if (err) console.log(err)
      else res.send(result)
    }
  )
})

//delete request endpoint
app.delete('/api/delete-book/:id', (req, res) => {
  const { id } = req.params

  db.query('DELETE FROM books WHERE id = ?', id, (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
})
