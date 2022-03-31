import React from 'react'
import { ImBooks } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from '../styles/bottomNavBar.module.scss'
import { useAuth0 } from '@auth0/auth0-react'

const BottomNavBar = () => {
  //auth0 stuff
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  const {
    location: { pathname },
  } = useHistory()

  return (
    <nav className={styles.navbar}>
      <Link
        to="/shelf"
        className={styles.searchBtn}
        style={{ color: pathname === '/shelf' && 'white' }}
      >
        <ImBooks />
        <p className={styles.iconLabel}>Shelf</p>
      </Link>
      <Link
        to="/"
        className={styles.searchBtn}
        style={{ color: pathname === '/' && 'white' }}
      >
        <FaSearch />
        <p className={styles.iconLabel}>Search</p>
      </Link>
      <button
        className={styles.loginBtn}
        onClick={() =>
          isAuthenticated
            ? logout({ returnTo: window.location.origin })
            : loginWithRedirect()
        }
      >
        {isAuthenticated ? <BiLogOut /> : <BiLogIn />}
        <p className={styles.iconLabel}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </p>
      </button>
    </nav>
  )
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state
  return { isLoggedIn }
}

export default connect(mapStateToProps)(BottomNavBar)
