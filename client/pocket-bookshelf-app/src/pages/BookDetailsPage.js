import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import BookInformation from '../components/BookInformation'

const BookDetailsPage = ({ searchList }) => {
  const { id } = useParams()

  const bookClickedOn = searchList.find((item) => item.id === id)

  return (
    <div>
      <HeaderBookDetails {...bookClickedOn} />
      <BookInformation {...bookClickedOn} />
      <BookBottomNavbar {...bookClickedOn} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { searchList } = state
  return { searchList }
}

export default connect(mapStateToProps)(BookDetailsPage)
