import React from 'react'
import '../styles/headerBookDetails.scss'

const HeaderBookDetails = ({ title, authors, pageCount, id }) => {
  let thumbnail = `https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
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
