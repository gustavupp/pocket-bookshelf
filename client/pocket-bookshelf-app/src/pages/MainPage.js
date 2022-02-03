import React from 'react'
import SearchBar from '../components/SearchBar'
import BottomNavBar from '../components/BottomNavBar'
import Loading from '../components/Loading'
import Card from '../components/Card'
import { connect } from 'react-redux'
import '../styles/mainPage.css'

const MainPage = ({
  nyBestSellerList,
  searchList,
  isSearching,
  isBestSellerListLoading,
}) => {
  //check if handling search list or best seller list
  let list = isSearching ? searchList : nyBestSellerList
  if (isBestSellerListLoading || undefined) return <Loading />

  return (
    <main>
      <SearchBar />
      <div className="card-container-wrapper">
        <h1 className="best-seller-title">Best Sellers</h1>
        <div className="card-container">
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
  const { nyBestSellerList, searchList, isSearching, isBestSellerListLoading } =
    state
  return {
    nyBestSellerList,
    searchList,
    isSearching,
    isBestSellerListLoading,
  }
}

export default connect(mapStateToProps)(MainPage)
