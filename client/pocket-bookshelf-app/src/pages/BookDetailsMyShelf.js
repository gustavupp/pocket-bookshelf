import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import BookInformation from '../components/BookInformation'
import { getBooksFromDb } from '../utils/dbQueries'
import { useAuth0 } from '@auth0/auth0-react'

const BookDetailsMyShelf = ({ bookShelf, dispatch }) => {
  const [bookClickedOn, setBookClickedOn] = useState([])
  //auth0
  const { isAuthenticated, user: { sub: userId = '' } = '' } = useAuth0()
  const { id } = useParams()

  useEffect(() => {
    bookShelf
      ? setBookClickedOn(bookShelf.find((item) => item.id === id))
      : //if page is refreshed fetch data from the db again and find the book whose id had been passed in
        getBooksFromDb(`http://localhost:3002/api/get-books/${userId}`).then(
          (data) => {
            setBookClickedOn(data.find((item) => item.id === id))
            console.log({ bookClickedOn, id })
          }
        )
  }, [])

  return (
    <div>
      <HeaderBookDetails {...bookClickedOn} />
      <BookInformation {...bookClickedOn} />
      <BookBottomNavbar {...bookClickedOn} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { bookShelf } = state
  return { bookShelf }
}

export default connect(mapStateToProps)(BookDetailsMyShelf)
