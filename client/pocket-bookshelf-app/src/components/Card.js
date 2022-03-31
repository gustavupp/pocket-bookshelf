import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/card.scss'

const Card = ({ id, title, thumbnail }) => {
  let history = useHistory()

  return (
    <div className="card">
      {/* chech the broswer's current path/url to decide where to send user */}
      <Link
        to={
          history.location.pathname === '/'
            ? `/book/${id}`
            : `/shelf/book/${id}`
        }
      >
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
