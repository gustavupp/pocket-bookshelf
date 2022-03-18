import React from 'react'
import { FaArrowLeft, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { postToDb, deleteFromDb, getBooksFromDb } from '../utils/dbQueries'
import { connect } from 'react-redux'
import '../styles/bookBottomNavbar.css'
import LoadingNoText from './LoadingNoText'

const BookBottomNavbar = ({
  id,
  categories,
  title,
  subtitle,
  authors,
  thumbnail,
  description,
  language,
  pageCount,
  publishedDate,
  buyLink,
  identifier,
  bookShelf,
  dispatch,
  isAddingBook,
}) => {
  //auth0 stuff
  const {
    isAuthenticated,
    loginWithRedirect,
    user: { email = '', sub: userId = '' } = {},
  } = useAuth0()

  //every time the page is refreshed the book is searched and returned from the databaselist
  let currentBook = bookShelf && bookShelf.find((item) => item.id === id)

  //function to delete book and update state
  const deleteBookAndDispatch = () => {
    dispatch({ type: 'SET_IS_ADDING_BOOK' })
    deleteFromDb(userId, id).then(() =>
      getBooksFromDb(
        `https://pocket-bookshelf.herokuapp.com/api/books/${userId}`
      ).then((data) => dispatch({ type: 'SET_BOOKSHELF', payload: data }))
    )
  }

  //function to add book to bookshelf and update state
  const addBookAndDispatch = () => {
    if (isAuthenticated) {
      dispatch({ type: 'SET_IS_ADDING_BOOK' })
      postToDb(
        userId,
        id,
        categories,
        title,
        subtitle,
        authors,
        thumbnail,
        description,
        language,
        pageCount,
        publishedDate,
        buyLink,
        identifier,
        email
      ).then(() =>
        getBooksFromDb(
          `https://pocket-bookshelf.herokuapp.com/api/books/${userId}`
        ).then((data) => dispatch({ type: 'SET_BOOKSHELF', payload: data }))
      )
    } else loginWithRedirect()
  }

  //when add or remove button is clicked, the loading component is displayed instead of the favorite btn
  if (isAddingBook)
    return (
      <div className="bottom-section">
        <Link to="/" className="back-btn">
          <FaArrowLeft />
        </Link>

        <LoadingNoText />

        <a
          type="button"
          href={buyLink}
          target="_blank"
          rel="noreferrer"
          className="buy-btn"
          style={
            buyLink !== 'No Link'
              ? { background: 'rgb(75, 177, 100)' }
              : {
                  background: 'grey',
                  boxShadow: '0px 4px rgb(85, 85, 85)',
                  pointerEvents: 'none',
                }
          }
        >
          BUY BOOK
        </a>
      </div>
    )

  return (
    <div className="bottom-section">
      <Link to="/" className="back-btn">
        <FaArrowLeft />
      </Link>

      {currentBook?.id ? (
        <button className="favorite-btn" onClick={deleteBookAndDispatch}>
          <span className="bookmarked">
            <FaBookmark />
          </span>
        </button>
      ) : (
        <button className="favorite-btn" onClick={addBookAndDispatch}>
          <span className="not-bookmarked">
            <FaRegBookmark />
          </span>
        </button>
      )}

      <a
        type="button"
        href={buyLink}
        target="_blank"
        rel="noreferrer"
        className="buy-btn"
        style={
          buyLink !== 'No Link'
            ? { background: 'rgb(75, 177, 100)' }
            : {
                background: 'grey',
                boxShadow: '0px 4px rgb(85, 85, 85)',
                pointerEvents: 'none',
              }
        }
      >
        BUY BOOK
      </a>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { bookShelf, isAddingBook } = state
  return { bookShelf, isAddingBook }
}

export default connect(mapStateToProps)(BookBottomNavbar)
