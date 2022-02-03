import React from 'react'
import { connect } from 'react-redux'
import '../styles/filters.css'

const Filters = ({ dispatch, searchFilter }) => {
  const handleChange = (e) => {
    dispatch({
      type: 'FILTER_BOOKSHELF',
      payload: { name: e.target.name, value: e.target.value },
    })
  }

  return (
    <div className="myShelf-top-section">
      <div className="form-div">
        <form className="bookShelf-form">
          <input
            className="myShelf-search"
            type="text"
            placeholder="Search Your Shelf by Title"
            name="search_text"
            value={searchFilter}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  const { searchFilter } = state
  return { searchFilter }
}

export default connect(mapStateToProps)(Filters)
