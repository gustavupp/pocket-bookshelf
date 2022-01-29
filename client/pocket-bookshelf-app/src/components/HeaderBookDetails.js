import React from 'react'
import '../styles/headerBookDetails.css'

const HeaderBookDetails = ({ title, authors, pageCount, thumbnail }) => {
  return (
    <div className="top-section">
      <img src={thumbnail} alt="book cover" />
      <div className="book-info">
        <h4>{title}</h4>
        <p>{authors}</p>
        <p>{pageCount} Pages</p>
      </div>
    </div>
  )
}

export default HeaderBookDetails
