import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
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

export default App
