import React from 'react'
import { FaArrowLeft, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import '../styles/bookBottomNavbar.css'

const BookBottomNavbar = ({ buyLink }) => {
  return (
    <div className="bottom-section">
      <button className="back-btn">
        <FaArrowLeft />
      </button>
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
          buyLink === ' No Link'
            ? { background: 'rgb(75, 177, 100)' }
            : { background: 'grey' }
        }
      >
        BUY BOOK
      </a>
    </div>
  )
}

export default BookBottomNavbar
