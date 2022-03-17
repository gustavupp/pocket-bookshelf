import React from 'react'
import { connect } from 'react-redux'
import '../styles/filters.css'

const Filters = ({ dispatch, searchFilter }) => {
  const handleFilterChange = (e) => {
    dispatch({
      type: 'FILTER_BOOKSHELF',
      payload: { name: e.target.name, value: e.target.value },
    })
  }

  const handleSortChange = (e) => {
    dispatch({ type: 'SORT_BOOKSHELF', payload: e.target.value })
  }

  return (
    <div className="myShelf-top-section">
      <div className="input-div">
        <input
          className="myShelf-search"
          type="text"
          placeholder="Search Your Shelf by Title"
          name="search_text"
          value={searchFilter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="dropdown-div">
        <select
          onChange={(e) => handleSortChange(e)}
          className="dropdown-sort"
          name="sort"
          id="sort"
        >
          <option value="date">Date Added</option>
          <option value="titleAz">Title(A-Z)</option>
          <option value="titleZa">Title(Z-A)</option>
          <option value="authorAz">Author(A-Z)</option>
          <option value="authorZa">Author(Z-A)</option>
        </select>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { searchFilter } = state
  return { searchFilter }
}

export default connect(mapStateToProps)(Filters)
