import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/bookShelfPage.scss'

const BookShelfPage = ({ filteredBookShelf = [] }) => {
  //auth0
  const { isAuthenticated } = useAuth0()

  return (
    <main className="bookshelf-page-main">
      {isAuthenticated ? (
        <>
          <Filters />
          <div className="card-container-wrapper">
            <h2 className="main-page-title">
              My Shelf ({filteredBookShelf?.length}
              {filteredBookShelf?.length === 1 ? 'Book' : 'Books'})
            </h2>

            <div className="card-container">
              {filteredBookShelf &&
                filteredBookShelf.map((item, index) => {
                  return <Card key={index} {...item} />
                })}
            </div>
          </div>
        </>
      ) : (
        <div className="not-authenticated">
          <p>Login or Signup to start adding books!</p>
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
