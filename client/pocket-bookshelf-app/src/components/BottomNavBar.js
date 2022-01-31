import React from 'react'
import { ImBooks } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/bottomNavBar.css'
import { useAuth0 } from '@auth0/auth0-react'

const BottomNavBar = ({ isLoggedIn, dispatch }) => {
  //auth0 stuff
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  console.log({ user, isAuthenticated })
  return (
    <nav className="navbar">
      <Link to="/shelf" className="search-section-btn">
        <ImBooks />
        <p>Shelf</p>
      </Link>
      <Link to="/" className="search-section-btn">
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
