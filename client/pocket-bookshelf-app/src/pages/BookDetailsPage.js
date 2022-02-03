import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import BookInformation from '../components/BookInformation'
import { fetchIndividualBook } from '../utils/fetchIndividualBook'

const BookDetailsPage = ({ nyBestSellerList, searchList, isSearching }) => {
  const { id } = useParams()
  const [bookClickedOn, setBookClickedOn] = useState([])

  useEffect(() => {
    if (nyBestSellerList || searchList) {
      //check if handling search list or best seller list
      const list = isSearching ? searchList : nyBestSellerList
      setBookClickedOn(list.find((item) => item.id === id))
    } else {
      fetchIndividualBook(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      ).then((data) => setBookClickedOn(data))
    }
  }, [id, nyBestSellerList, isSearching, searchList])

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
