const express = require('express')
const app = express()
const cors = require('cors')
const books = require('./routes/books')

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/books', books)

//start listening for requests
const PORT = process.env.PORT || 3002
app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log(`Server Listening on port ${PORT}.`)
})
