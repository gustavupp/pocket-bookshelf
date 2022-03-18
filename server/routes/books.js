const express = require('express')
const router = express.Router()
const {
  getBooks,
  postBook,
  deleteBook,
  updateBook,
} = require('../controllers/books')

//get request
router.get('/:userId', getBooks)

//post request
router.post('/add', postBook)

//delete request
router.delete('/:userId/:id', deleteBook)

//update request
router.put('/update', updateBook)

module.exports = router
