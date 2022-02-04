import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import BookInformation from '../components/BookInformation'
import { getBooksFromDb } from '../utils/dbQueries'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchIndividualBook } from '../utils/fetchIndividualBook'

const BookDetailsMyShelf = ({ bookShelf }) => {
  const [bookClickedOn, setBookClickedOn] = useState([])
  //auth0
  const { user: { sub: userId = '' } = '' } = useAuth0()
  const { id } = useParams()

  useEffect(() => {
    if (bookShelf) {
      bookShelf.find((item) => item.id === id)
        ? setBookClickedOn(bookShelf.find((item) => item.id === id))
        : fetchIndividualBook(
            `https://www.googleapis.com/books/v1/volumes/${id}`
          ).then((data) => setBookClickedOn(data))
    } else {
      //if page is refreshed fetch data from the db again and find the book whose id had been passed in
      getBooksFromDb(
        `https://pocket-bookshelf.herokuapp.com/api/get-books/${userId}`
      ).then((data) => {
        setBookClickedOn(data.find((item) => item.id === id))
      })
    }
  }, [bookShelf, id, userId])

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
