import { useEffect } from 'react'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { formattedDate } from './utils/date'

//create redux store
const store = createStore(reducer)

function App() {
  useEffect(() => {
    const { dispatch } = store

    //API_KEY
    const nyTimesApiKey = process.env.REACT_APP_NY_TIMES_API_KEY

    const bestSellerUrl = `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${nyTimesApiKey}`

    let lastFetchedDate = localStorage.getItem('Date')
      ? localStorage.getItem('Date')
      : ''

    if (localStorage.getItem('nyList') && lastFetchedDate === formattedDate()) {
      //getIsbns(JSON.parse(localStorage.getItem('nyList')))
      dispatch({
        type: 'SET_BESTSELLER_LIST',
        payload: JSON.parse(localStorage.getItem('nyList')),
      })
      console.log(store.getState())
    } else {
      console.log('im here')
      fetch(bestSellerUrl)
        .then((response) => response.json())
        .then((data) => {
          //getIsbns(JSON.parse(localStorage.getItem('nyList')))
          localStorage.setItem('nyList', JSON.stringify(data.results.books))
          localStorage.setItem('Date', formattedDate())
        })
        .catch((error) => console.log(error))
    }
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
