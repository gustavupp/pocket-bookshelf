import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { connect } from 'react-redux'
import { destructureList } from '../utils/destructureList'
import { fetchIndividualBook } from '../utils/fetchIndividualBook'
import '../styles/searchBar.css'

const SearchBar = ({ sendSearchToStore }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = searchValue.replaceAll(' ', '+')
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=40`
    fetchIndividualBook(searchUrl).then((data) => sendSearchToStore(data))
  }

  return (
    <div className="search-container">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search by Title, Author or ISBN"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendSearchToStore: (data) =>
      dispatch({ type: 'SEND_SEARCH_TO_STORE', payload: data }),
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
