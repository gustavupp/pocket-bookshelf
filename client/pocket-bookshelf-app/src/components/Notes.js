import React, { useEffect, useState } from 'react'
import { updateBookNotes, getBooksFromDb } from '../utils/dbQueries'
import '../styles/notes.css'

const Notes = (bookClickedOn) => {
  const [bookNotes, setBookNotes] = useState(' ')
  const { notes = ' ', id, userId } = bookClickedOn

  useEffect(() => {
    if (notes) setBookNotes(notes)
  }, [])

  const handleClick = () => {
    updateBookNotes(userId, id, bookNotes).then(() =>
      getBooksFromDb(
        `https://pocket-bookshelf.herokuapp.com/api/books/${userId}`
      )
    )
  }

  return (
    <div className="notes-container">
      <h4>NOTES</h4>
      <textarea
        className="book-notes"
        rows="6"
        placeholder="Want to add some notes?"
        value={bookNotes}
        onChange={(e) => setBookNotes(e.target.value)}
      ></textarea>
      <button className="notes-btn" onClick={handleClick}>
        SAVE
      </button>
    </div>
  )
}

export default Notes
