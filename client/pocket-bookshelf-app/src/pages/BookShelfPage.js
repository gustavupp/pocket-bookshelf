import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/bookShelfPage.module.scss'

const BookShelfPage = ({ filteredBookShelf = [] }) => {
  //auth0
  const { isAuthenticated } = useAuth0()

  return (
    <main className={styles.main}>
      {isAuthenticated ? (
        <>
          <Filters />
          <div className={styles.container}>
            <h2 className={styles.title}>
              My Shelf ({filteredBookShelf?.length}
              {filteredBookShelf?.length === 1 ? 'Book' : 'Books'})
            </h2>

            <div className={styles.cardContainer}>
              {filteredBookShelf &&
                filteredBookShelf.map((item, index) => {
                  return <Card key={index} {...item} />
                })}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.notAuthenticated}>
          <p className={styles.title}>Login or Signup to start adding books!</p>
        </div>
      )}

      <BottomNavBar />
    </main>
  )
}

const mapStateToProps = (state) => {
  const { filteredBookShelf } = state
  return { filteredBookShelf }
}

export default connect(mapStateToProps)(BookShelfPage)
