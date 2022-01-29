import React from 'react'
import '../styles/bookInformation.css'
const BookInformation = () => {
  return (
    <div className="middle-section">
      <h4>TITLE</h4>
      <p>title of book</p>
      <br />
      <h4>SUBTITLE</h4>
      <p>books subtiutle</p>
      <br />
      <h4>AUTHORS</h4>
      <p>authors</p>
      <br />
      <h4 className="description-title">DESCRIPTION</h4>
      <p className="description-content">description goes here</p>
      <br />
      <h4>CATEGORIES</h4>
      <p>categoris</p>
      <br />
      <h4>LANGUAGE</h4>
      <p>EN</p>
      <br />
      <h4>PUBLISHED DATE</h4>
      <p>12/12/12</p>
      <br />
      <h4>ISBN</h4>
      <p>123434123</p>
    </div>
  )
}

export default BookInformation
