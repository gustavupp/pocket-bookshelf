import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'

const BookShelfPage = () => {
  return (
    <main>
      <div className="card-container-wrapper">
        <h1 className="best-seller-title">My Shelf</h1>
        <div className="card-container">
          <Card />
        </div>
      </div>
      <BottomNavBar />
    </main>
  )
}

export default BookShelfPage
