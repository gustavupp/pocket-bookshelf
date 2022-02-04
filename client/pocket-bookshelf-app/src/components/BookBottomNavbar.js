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
  isAddingOrRemovingBook,
}) => {
  //auth0 stuff
  const {
    isAuthenticated,
    loginWithRedirect,
    user: { email = '', sub: userId = '' } = '',
  } = useAuth0()

  //every time the page is refreshed the book is searched and returned from the databaselist
  let currentBook = bookShelf && bookShelf.find((item) => item.id === id)

  if (isAddingOrRemovingBook) return <LoadingNoText />

  return (
    <div className="bottom-section">
      <Link to="/" className="back-btn">
        <FaArrowLeft />
      </Link>
      {currentBook?.id ? (
        <button
          className="favorite-btn"
          onClick={() => {
            dispatch({ type: 'SET_IS_ADDING_OR_REMOVING', payload: true })
            deleteFromDb(id).then(() =>
              getBooksFromDb(
                `https://pocket-bookshelf.herokuapp.com/api/get-books/${userId}`
              ).then((data) =>
                dispatch({ type: 'SET_BOOKSHELF', payload: data })
              )
            )
            dispatch({ type: 'SET_IS_ADDING_OR_REMOVING', payload: false })
          }}
        >
          <span className="bookmarked">
            <FaBookmark />
          </span>
        </button>
      ) : (
        <button
          className="favorite-btn"
          onClick={() =>
            isAuthenticated
              ? postToDb(
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
                    `https://pocket-bookshelf.herokuapp.com/api/get-books/${userId}`
                  ).then((data) =>
                    dispatch({ type: 'SET_BOOKSHELF', payload: data })
                  )
                )
              : loginWithRedirect()
          }
        >
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
  const { bookShelf, isAddingOrRemovingBook } = state
  return { bookShelf, isAddingOrRemovingBook }
}

export default connect(mapStateToProps)(BookBottomNavbar)
