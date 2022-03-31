import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { api } from '../utils/APICalls'
import LoadingNoText from './LoadingNoText'
import '../styles/notes.scss'

const Notes = ({ isUpdatingBook, ...bookClickedOn }) => {
  const [bookNotes, setBookNotes] = useState('')
  const { notes = '', id, userId = '', dispatch } = bookClickedOn

  useEffect(() => {
    if (notes) setBookNotes(notes)
  }, [notes])

  const handleClick = () => {
    dispatch({ type: 'SET_IS_UPDATING_BOOK', payload: true })
    api
      .updateBookNotes(userId, id, bookNotes)
      .then(() =>
        api
          .getBooksFromDb(userId)
          .then((data) => dispatch({ type: 'SET_BOOKSHELF', payload: data }))
      )
  }

  //dont show the save button if user hasnt changed the value of notes
  if (notes === bookNotes || (bookNotes === '' && notes === null)) {
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
      </div>
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

      {isUpdatingBook ? (
        <>
          <br />
          <LoadingNoText />
        </>
      ) : (
        <button className="notes-btn" onClick={handleClick}>
          SAVE
        </button>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { isUpdatingBook } = state
  return { isUpdatingBook }
}

export default connect(mapStateToProps)(Notes)
