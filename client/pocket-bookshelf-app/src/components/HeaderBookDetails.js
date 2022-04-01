import React from 'react'
import styles from '../styles/headerBookDetails.module.scss'

const HeaderBookDetails = ({ title, authors, pageCount, id }) => {
  let thumbnail = `https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
  return (
    <>
      <div className={styles.top}>
        <img className={styles.thumbnail} src={thumbnail} alt="book cover" />
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>{authors}</p>
          <p>{pageCount} Pages</p>
        </div>
      </div>
      <div className={styles.spacer} />
    </>
  )
}

export default HeaderBookDetails
