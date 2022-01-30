import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { Auth0Provider } from '@auth0/auth0-react'
import './styles/index.css'

//create redux store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux dev tools
)

//auth0 .env variables
const REACT_APP_AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
const REACT_APP_AUTH0_ID = process.env.REACT_APP_AUTH0_ID

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_ID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
