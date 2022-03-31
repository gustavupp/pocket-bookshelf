import React from 'react'
import styles from '../styles/loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.animation}></div>
      <h3 className={styles.text}>Loading...</h3>
    </div>
  )
}

export default Loading
