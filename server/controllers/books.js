const db = require('../db/db')

const getBooks = (req, res) => {
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
}

const postBook = (req, res) => {
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
}

const deleteBook = (req, res) => {
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
}

module.exports = { getBooks, postBook, deleteBook }
