import React from 'react'
import { FaArrowLeft, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/bookBottomNavbar.css'

const BookBottomNavbar = ({ buyLink }) => {
  return (
    <div className="bottom-section">
      <Link to="/" className="back-btn">
        <FaArrowLeft />
      </Link>
      <button className="favorite-btn">
        <span className="not-bookmarked">
          <FaRegBookmark />
        </span>
        <span className="bookmarked show-btn">
          <FaBookmark />
        </span>
      </button>
      <a
        type="button"
        href={buyLink}
        target="_blank"
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

export default BookBottomNavbar
