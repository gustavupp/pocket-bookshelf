import React from 'react'
import '../styles/card.css'

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://dummyimage.com/120x150/000/fff.png&text=No+Cover!"
        alt="book cover"
        className="book-cover"
      />
      <div className="book-info">
        <p className="title">book title</p>
      </div>
    </div>
  )
}

export default Card
