import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/bookShelfPage.css'

const BookShelfPage = ({ filteredBookShelf = [] }) => {
  //auth0
  const { isAuthenticated } = useAuth0()

  return (
    <main className="bookshelf-page-main">
      <Filters />
      <div className="card-container-wrapper">
        {isAuthenticated ? (
          <h2 className="main-page-title">
            My Shelf ({filteredBookShelf?.length}
            {filteredBookShelf?.length === 1 ? 'Book' : 'Books'})
          </h2>
        ) : (
          <p>Login to start adding books!</p>
        )}

        <div className="card-container">
          {filteredBookShelf &&
            filteredBookShelf.map((item, index) => {
              return <Card key={index} {...item} />
            })}
        </div>
      </div>
      <BottomNavBar />
    </main>
  )
}

const mapStateToProps = (state) => {
  const { filteredBookShelf } = state
  return { filteredBookShelf }
}

export default connect(mapStateToProps)(BookShelfPage)
