import React from 'react'
import '../styles/notes.css'

const Notes = () => {
  return (
    <div className="notes-container">
      <h4>NOTES</h4>
      <textarea
        className="book-notes"
        rows="6"
        placeholder="Want to add some notes?"
      ></textarea>
    </div>
  )
}

export default Notes
