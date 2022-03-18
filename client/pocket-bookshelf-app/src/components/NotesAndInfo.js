import React, { useState } from 'react'
import BookInformation from '../components/BookInformation'
import Notes from './Notes'
import '../styles/notesAndInfo.css'

const NotesAndInfo = (bookClickedOn) => {
  const [notes, setNotes] = useState(false)

  return (
    <>
      <div className="notesandinfo-container">
        <button
          className={`${
            notes ? 'notesandinfo-info' : 'notesandinfo-notes active-btn'
          }`}
          onClick={() => setNotes(false)}
        >
          INFO
        </button>
        <button
          className={`${
            notes ? 'notesandinfo-notes active-btn' : 'notesandinfo-notes'
          }`}
          onClick={() => setNotes(true)}
        >
          NOTES
        </button>
      </div>
      <hr style={{ border: '1px solid var(--secondary-color)' }} />
      {notes ? <Notes /> : <BookInformation {...bookClickedOn} />}
    </>
  )
}

export default NotesAndInfo
