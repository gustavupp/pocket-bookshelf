import React from 'react'
import SearchBar from '../components/SearchBar'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'
import { connect } from 'react-redux'
import '../styles/mainPage.css'

const MainPage = ({ nyBestSellerList }) => {
  return (
    <main>
      <SearchBar />

      <div className="nyList-wrapper-container">
        <h1 className="best-seller-title">Best Sellers</h1>
        <div className="nyList-container">
          {nyBestSellerList.map((item, index) => {
            return <Card key={index} {...item} />
          })}
        </div>
      </div>
      <BottomNavBar />
    </main>
  )
}

const mapStateToProps = (state) => {
  const { nyBestSellerList } = state
  return { nyBestSellerList }
}

export default connect(mapStateToProps)(MainPage)
