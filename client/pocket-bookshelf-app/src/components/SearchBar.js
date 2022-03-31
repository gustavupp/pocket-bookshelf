import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { connect } from 'react-redux'
import { googleAPI } from '../utils/googleApiCalls'
import '../styles/searchBar.scss'

const SearchBar = ({ sendSearchToStore, setSearchListLoading }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchListLoading()
    googleAPI
      .fetchBookSearch(searchValue)
      .then((data) => sendSearchToStore(data))
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
    setSearchListLoading: () => dispatch({ type: 'SEARCH_IS_LOADING' }),
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
