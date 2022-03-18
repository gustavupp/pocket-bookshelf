import React, { useState } from 'react'
import BookInformation from '../components/BookInformation'
import Notes from './Notes'
import { connect } from 'react-redux'
import '../styles/notesAndInfo.css'

const NotesAndInfo = (bookClickedOn) => {
  const [isNotes, setIsNotes] = useState(false)

  return (
    <>
      <div className="notesandinfo-container">
        <button
          className={`${
            isNotes ? 'notesandinfo-info' : 'notesandinfo-notes active-btn'
          }`}
          onClick={() => setIsNotes(false)}
        >
          INFO
        </button>
        <button
          className={`${
            isNotes ? 'notesandinfo-notes active-btn' : 'notesandinfo-notes'
          }`}
          onClick={() => setIsNotes(true)}
        >
          NOTES
        </button>
      </div>
      <hr style={{ border: '1px solid var(--secondary-color)' }} />

      {isNotes ? (
        <Notes {...bookClickedOn} />
      ) : (
        <BookInformation {...bookClickedOn} />
      )}
    </>
  )
}

export default connect()(NotesAndInfo)
