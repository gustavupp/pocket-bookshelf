import React from 'react'
import { ImBooks } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/bottomNavBar.css'
import { useAuth0 } from '@auth0/auth0-react'

const BottomNavBar = () => {
  //auth0 stuff
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  const {
    location: { pathname },
  } = useHistory()

  return (
    <nav className="navbar">
      <Link
        to="/shelf"
        className="search-section-btn"
        style={{ color: pathname === '/shelf' && 'white' }}
      >
        <ImBooks />
        <p>Shelf</p>
      </Link>
      <Link
        to="/"
        className="search-section-btn"
        style={{ color: pathname === '/' && 'white' }}
      >
        <FaSearch />
        <p>Search</p>
      </Link>
      <button
        className="login-btn"
        onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
      >
        {isAuthenticated ? <BiLogOut /> : <BiLogIn />}
        <p>{isAuthenticated ? 'Logout' : 'Login'}</p>
      </button>
    </nav>
  )
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state
  return { isLoggedIn }
}

export default connect(mapStateToProps)(BottomNavBar)
