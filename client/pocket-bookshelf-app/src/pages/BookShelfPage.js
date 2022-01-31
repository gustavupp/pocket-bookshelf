import React, { useEffect } from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'

const BookShelfPage = () => {
  useEffect(() => {
    const getBooksFromDb = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/get-books')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBooksFromDb()
  }, [])

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
