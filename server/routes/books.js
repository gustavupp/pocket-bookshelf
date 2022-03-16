const express = require('express')
const router = express.Router()

//get request
router.get('/api/books/:userId', (req, res) => {
  const { userId } = req.params //get userId from req.params

  db.getConnection((err, connection) => {
    if (err) throw err
    console.log('connected as id ' + connection.threadId)

    connection.query(
      'SELECT * FROM books WHERE userId = ?',
      userId,
      (err, result) => {
        if (err) console.log(err)
        else res.send(result)
      }
    )
    connection.release()
  })
})

//post request
router.post('/api/books/add', (req, res) => {
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

  db.getConnection((err, connection) => {
    if (err) throw err
    console.log('connected as id ' + connection.threadId)

    connection.query(
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
    connection.release()
  })
})

//delete request
router.delete('/api/books/:id', (req, res) => {
  const { id } = req.params

  db.getConnection((err, connection) => {
    if (err) throw err
    console.log('connected as id ' + connection.threadId)

    connection.query('DELETE FROM books WHERE id = ?', id, (err, result) => {
      if (err) console.log(err)
      else res.send(result)
    })
    connection.release()
  })
})

module.exports = router
