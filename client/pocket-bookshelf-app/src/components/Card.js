import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'

const Card = ({
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
}) => {
  return (
    <div className="card">
      <Link to={`/book/${id}`}>
        <img
          src={
            thumbnail
              ? thumbnail
              : 'https://dummyimage.com/70x100/00f/fff.png&text=No+Cover!'
          }
          alt="book cover"
          className="book-cover"
        />
      </Link>

      <div className="book-info">
        <p className="title">
          {title?.length > 11 ? title.slice(0, 13) + '...' : title}
        </p>
      </div>
    </div>
  )
}

export default Card
