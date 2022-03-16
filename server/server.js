const express = require('express')
const app = express()
const cors = require('cors')
//const db = require('./db/db')
const books = require('./routes/books')

app.use(cors())
app.use(express.json())

app.use('/api/books/', books)

// app.get('/api/get-books/:userId', (req, res) => {
//   const { userId } = req.params //get userId from req.params

//   db.getConnection((err, connection) => {
//     if (err) throw err
//     console.log('connected as id ' + connection.threadId)

//     connection.query(
//       'SELECT * FROM books WHERE userId = ?',
//       userId,
//       (err, result) => {
//         if (err) console.log(err)
//         else res.send(result)
//       }
//     )
//     connection.release()
//   })
// })

// app.post('/api/add-book', (req, res) => {
//   let {
//     userId,
//     id,
//     title,
//     subtitle,
//     authors,
//     categories,
//     thumbnail,
//     description,
//     language,
//     pageCount,
//     publishedDate,
//     buyLink,
//     identifier,
//     email,
//   } = req.body
//   description = description.replaceAll("'", '`')

//   db.getConnection((err, connection) => {
//     if (err) throw err
//     console.log('connected as id ' + connection.threadId)

//     connection.query(
//       'INSERT INTO books (userId, id, title, subtitle, authors, categories, thumbnail, description,language,   pageCount, publishedDate, buyLink, identifier, email) VALUES (?, ? , ?, ?, ?, ?, ? ,? ,?, ? , ? ,?, ? ,?)',
//       [
//         userId,
//         id,
//         title,
//         subtitle,
//         authors,
//         categories,
//         thumbnail,
//         description,
//         language,
//         pageCount,
//         publishedDate,
//         buyLink,
//         identifier,
//         email,
//       ],
//       (err, result) => {
//         if (err) console.log(err)
//         else res.send(result)
//       }
//     )
//     connection.release()
//   })
// })

// app.delete('/api/delete-book/:id', (req, res) => {
//   const { id } = req.params

//   db.getConnection((err, connection) => {
//     if (err) throw err
//     console.log('connected as id ' + connection.threadId)

//     connection.query('DELETE FROM books WHERE id = ?', id, (err, result) => {
//       if (err) console.log(err)
//       else res.send(result)
//     })
//     connection.release()
//   })
// })

//start listening for requests

const PORT = process.env.PORT || 3002
app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`Server Listening on port ${PORT}`)
})
