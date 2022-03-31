import React, { useState } from 'react'
import BookInformation from '../components/BookInformation'
import Notes from './Notes'
import { connect } from 'react-redux'
import styles from '../styles/notesAndInfo.module.scss'

const NotesAndInfo = (bookClickedOn) => {
  const [isNotes, setIsNotes] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <button
          className={isNotes ? styles.notes : styles.active}
          onClick={() => setIsNotes(false)}
        >
          INFO
        </button>
        <button
          className={isNotes ? styles.active : styles.notes}
          onClick={() => setIsNotes(true)}
        >
          NOTES
        </button>
      </div>
      <hr className={styles.line} />

      {isNotes ? (
        <Notes {...bookClickedOn} />
      ) : (
        <BookInformation {...bookClickedOn} />
      )}
    </>
  )
}

export default connect()(NotesAndInfo)
