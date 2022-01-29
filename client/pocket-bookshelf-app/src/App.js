import { useEffect } from 'react'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { formattedDate } from './utils/date'
import { fetchISBNS } from './utils/fetchISBNS'

function App({ state, dispatch }) {
  useEffect(() => {
    //API_KEY
    const nyTimesApiKey = process.env.REACT_APP_NY_TIMES_API_KEY

    const bestSellerUrl = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${nyTimesApiKey}`

    let lastFetchedDate = localStorage.getItem('Date')
      ? localStorage.getItem('Date')
      : ''

    if (localStorage.getItem('nyList') && lastFetchedDate === formattedDate()) {
      dispatch({
        type: 'SET_BESTSELLER_LIST',
        payload: JSON.parse(localStorage.getItem('nyList')),
      })
    } else {
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
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = (state) => {
  console.log(state)
  return { state }
}

export default connect(mapDispatchToProps)(App)
