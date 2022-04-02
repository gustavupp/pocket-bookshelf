import React, { useState } from 'react'
import styles from '../styles/bookInformation.module.scss'

const BookInformation = ({
  categories,
  title,
  subtitle,
  authors,
  description,
  language,
  publishedDate,
  identifier,
}) => {
  const [readMore, setReadMore] = useState(false)
  let newDescription = readMore
    ? description
    : description?.substring(0, 250) + '...'

  return (
    <div className={styles.middleSection}>
      <h4>TITLE</h4>
      <p>{title}</p>
      <br />
      <h4>SUBTITLE</h4>
      <p>{subtitle}</p>
      <br />
      <h4>AUTHORS</h4>
      <p>{authors}</p>
      <br />
      <h4>DESCRIPTION</h4>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: newDescription }}
      ></p>
      <h4 onClick={() => setReadMore(!readMore)} className={styles.readmore}>
        {readMore ? 'Read less' : 'Read more'}
      </h4>
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
