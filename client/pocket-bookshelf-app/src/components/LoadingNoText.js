import React from 'react'
import styles from '../styles/loadingNoText.module.scss'

const LoadingNoText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.animation}></div>
    </div>
  )
}

export default LoadingNoText
