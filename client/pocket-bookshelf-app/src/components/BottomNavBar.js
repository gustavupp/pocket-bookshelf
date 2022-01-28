import React from 'react'
import { ImBooks } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import '../styles/bottomNavBar.css'

const BottomNavBar = () => {
  return (
    <nav className="navbar">
      <button className="my-shelf-btn">
        <ImBooks />
        <p style={{ marginTop: '-5px', fontSize: '13px' }}>Shelf</p>
      </button>
      <button className="search-section-btn">
        <FaSearch />
        <p style={{ marginTop: '-5px', fontSize: '13px' }}>Search</p>
      </button>
    </nav>
  )
}

export default BottomNavBar
