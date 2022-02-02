import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import '../styles/bookShelfPage.css'

const BookShelfPage = ({ bookShelf, dispatch }) => {
  return (
    <main>
      <Filters />
      <div className="card-container-wrapper">
        <h1 className="best-seller-title">
          My Shelf ({bookShelf?.length} Books)
        </h1>
        <div className="card-container">
          {bookShelf &&
            bookShelf.map((item, index) => {
              return <Card key={index} {...item} />
            })}
        </div>
      </div>
      <BottomNavBar />
    </main>
  )
}

const mapStateToProps = (state) => {
  const { bookShelf } = state
  return { bookShelf }
}

export default connect(mapStateToProps)(BookShelfPage)