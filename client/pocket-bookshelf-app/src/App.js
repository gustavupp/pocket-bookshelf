import { useEffect } from 'react'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { formattedDate } from './utils/date'
import { fetchISBNS } from './utils/fetchISBNS'
import BookDetailsPage from './pages/BookDetailsPage'
import BookShelfPage from './pages/BookShelfPage'
import BookDetailsMyShelf from './pages/BookDetailsMyShelf'
import { getBooksFromDb } from './utils/dbQueries'
import { useAuth0 } from '@auth0/auth0-react'

function App({ dispatch }) {
  //auth0
  const { isAuthenticated, user: { sub: userId = '' } = '' } = useAuth0()

  useEffect(() => {
    //NY_API_KEY
    const nyTimesApiKey = process.env.REACT_APP_NY_TIMES_API_KEY
    const bestSellerUrl = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${nyTimesApiKey}`

    //get the date when the best seller list was last fetched
    let lastFetchedDate = localStorage.getItem('Date')
      ? localStorage.getItem('Date')
      : ''

    //check if there is a ny list in local storage and if the list is today's list
    if (localStorage.getItem('nyList') && lastFetchedDate === formattedDate()) {
      dispatch({
        type: 'SET_BESTSELLER_LIST',
        payload: JSON.parse(localStorage.getItem('nyList')),
      })
    } else {
      dispatch({ type: 'BEST_SELLERS_LOADING', payload: true })
      fetch(bestSellerUrl)
        .then((response) => response.json())
        .then((nyList) => {
          fetchISBNS(nyList).then((data) => {
            dispatch({
              type: 'SET_BESTSELLER_LIST',
              payload: data,
            })
            localStorage.setItem('nyList', JSON.stringify(data))
            localStorage.setItem('Date', formattedDate())
          })
        })
        .catch((error) => console.log(error))
    }
  }, [dispatch])

  useEffect(() => {
    //get all books from database
    isAuthenticated &&
      getBooksFromDb(
        `https://pocket-bookshelf.herokuapp.com/api/get-books/${userId}`
      ).then((data) => dispatch({ type: 'SET_BOOKSHELF', payload: data }))
  }, [isAuthenticated, userId, dispatch])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/shelf">
          <BookShelfPage />
        </Route>
        <Route path="/shelf/book/:id" children={<BookDetailsMyShelf />}></Route>
        <Route path="/book/:id" children={<BookDetailsPage />}></Route>
        <Route path="*">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = (state) => {
  return { state }
}

export default connect(mapDispatchToProps)(App)
