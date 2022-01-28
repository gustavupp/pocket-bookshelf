import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../styles/searchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
      <form action="submit">
        <input
          className="search"
          type="text"
          placeholder="Search by Title, Author or ISBN"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
