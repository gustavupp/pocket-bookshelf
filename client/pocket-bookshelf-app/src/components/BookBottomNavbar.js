import React from 'react'
import { FaArrowLeft, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { api } from '../utils/APICalls'
import { connect } from 'react-redux'
import styles from '../styles/bookBottomNavbar.module.scss'
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
    api
      .deleteFromDb(userId, id)
      .then(() =>
        api
          .getBooksFromDb(userId)
          .then((data) => dispatch({ type: 'SET_BOOKSHELF', payload: data }))
      )
  }

  //function to add book to bookshelf and update state
  const addBookAndDispatch = () => {
    if (isAuthenticated) {
      dispatch({ type: 'SET_IS_ADDING_BOOK' })
      api
        .postToDb(
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
        )
        .then(() =>
          api
            .getBooksFromDb(userId)
            .then((data) => dispatch({ type: 'SET_BOOKSHELF', payload: data }))
        )
    } else loginWithRedirect()
  }

  //when add or remove button is clicked, the loading component is displayed instead of the favorite btn
  if (isAddingBook)
    return (
      <div className={styles.bottom}>
        <Link to="/" className={styles.backBtn}>
          <FaArrowLeft />
        </Link>
        <LoadingNoText />
        <a
          href={buyLink}
          target="_blank"
          rel="noreferrer"
          className={
            buyLink !== 'No Link'
              ? styles.buyBtn
              : styles.buyBtn + styles.disabled
          }
        >
          BUY BOOK
        </a>
      </div>
    )

  return (
    <div className={styles.bottom}>
      <Link to="/" className={styles.backBtn}>
        <FaArrowLeft />
      </Link>

      {currentBook?.id ? (
        <button className={styles.favoriteBtn} onClick={deleteBookAndDispatch}>
          <span>
            <FaBookmark />
          </span>
        </button>
      ) : (
        <button className={styles.favoriteBtn} onClick={addBookAndDispatch}>
          <span>
            <FaRegBookmark />
          </span>
        </button>
      )}

      <a
        href={buyLink}
        target="_blank"
        rel="noreferrer"
        className={
          buyLink !== 'No Link'
            ? styles.buyBtn
            : styles.buyBtn + styles.disabled
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
