import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import NotesAndInfo from '../components/NotesAndInfo'
import { useAuth0 } from '@auth0/auth0-react'
import { googleAPI } from '../utils/googleApiCalls'

const BookDetailsMyShelf = ({ bookShelf }) => {
  const [bookClickedOn, setBookClickedOn] = useState([])
  //auth0
  const { user: { sub: userId = '' } = {} } = useAuth0()
  const { id } = useParams()

  useEffect(() => {
    if (bookShelf) {
      bookShelf.find((item) => item.id === id)
        ? setBookClickedOn(bookShelf.find((item) => item.id === id))
        : googleAPI
            .fetchIndividualBook(id)
            .then((data) => setBookClickedOn(data))
    }
  }, [bookShelf, id, userId])

  return (
    <div>
      <HeaderBookDetails {...bookClickedOn} />
      <NotesAndInfo {...bookClickedOn} />
      <BookBottomNavbar {...bookClickedOn} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { bookShelf } = state
  return { bookShelf }
}

export default connect(mapStateToProps)(BookDetailsMyShelf)
