import React from 'react'
import { ImBooks } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/bottomNavBar.css'

const BottomNavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/shelf" className="my-shelf-btn">
        <ImBooks />
        <p style={{ marginTop: '-5px', fontSize: '13px' }}>Shelf</p>
      </Link>
      <Link to="/" className="search-section-btn">
        <FaSearch />
        <p style={{ marginTop: '-5px', fontSize: '13px' }}>Search</p>
      </Link>
    </nav>
  )
}

export default BottomNavBar
