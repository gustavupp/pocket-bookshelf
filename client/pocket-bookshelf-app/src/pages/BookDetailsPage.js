import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import BookInformation from '../components/BookInformation'

const BookDetailsPage = ({ nyBestSellerList, searchList, isSearching }) => {
  const { id } = useParams()

  //check if handling search list or best seller list
  const list = isSearching ? searchList : nyBestSellerList
  const bookClickedOn = list.find((item) => item.id === id)

  return (
    <div>
      <HeaderBookDetails {...bookClickedOn} />
      <BookInformation {...bookClickedOn} />
      <BookBottomNavbar {...bookClickedOn} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { searchList, nyBestSellerList, isSearching } = state
  return { searchList, nyBestSellerList, isSearching }
}

export default connect(mapStateToProps)(BookDetailsPage)
