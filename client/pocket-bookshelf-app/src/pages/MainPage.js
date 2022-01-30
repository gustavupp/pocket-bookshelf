import React from 'react'
import SearchBar from '../components/SearchBar'
import BottomNavBar from '../components/BottomNavBar'
import Card from '../components/Card'
import { connect } from 'react-redux'
import '../styles/mainPage.css'

const MainPage = ({ nyBestSellerList, searchList, isSearching }) => {
  //check if handling search list or best seller list
  let list = isSearching ? searchList : nyBestSellerList
  return (
    <main>
      <SearchBar />
      <div className="nyList-wrapper-container">
        <h1 className="best-seller-title">Best Sellers</h1>
        <div className="nyList-container">
          {list &&
            list.map((item, index) => {
              return <Card key={index} {...item} />
            })}
        </div>
      </div>
      <BottomNavBar />
    </main>
  )
}

const mapStateToProps = (state) => {
  const { nyBestSellerList, searchList, isSearching } = state
  return { nyBestSellerList, searchList, isSearching }
}

export default connect(mapStateToProps)(MainPage)
