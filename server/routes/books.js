const express = require('express')
const router = express.Router()
const { getBooks, postBook, deleteBook } = require('../controllers/books')

//get request
router.get('/:userId', getBooks)

//post request
router.post('/add', postBook)

//delete request
router.delete('/:userId/:id', deleteBook)

module.exports = router
