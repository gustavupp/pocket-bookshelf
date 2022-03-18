import React from 'react'
import '../styles/bookInformation.css'

const BookInformation = ({
  id,
  categories,
  title,
  subtitle,
  authors,
  description,
  language,
  publishedDate,
  identifier,
}) => {
  return (
    <div className="middle-section">
      <h4>TITLE</h4>
      <p>{title}</p>
      <br />
      <h4>SUBTITLE</h4>
      <p>{subtitle}</p>
      <br />
      <h4>AUTHORS</h4>
      <p>{authors}</p>
      <br />
      <h4 className="description-title">DESCRIPTION</h4>
      <p
        className="description-content"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <br />
      <h4>CATEGORIES</h4>
      <p>{categories}</p>
      <br />
      <h4>LANGUAGE</h4>
      <p>{language}</p>
      <br />
      <h4>PUBLISHED DATE</h4>
      <p>{publishedDate}</p>
      <br />
      <h4>ISBN</h4>
      <p>{identifier}</p>
      <br />
    </div>
  )
}

export default BookInformation
