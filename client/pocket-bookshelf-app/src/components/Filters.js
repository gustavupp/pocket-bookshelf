import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../styles/filters.css'

const Filters = ({ bookShelf }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="myShelf-top-section">
      <div className="form-div">
        <form className="bookShelf-form">
          <input
            className="myShelf-search"
            type="text"
            placeholder="Search Your Shelf by Title"
            value={searchValue}
            onChange={(e) => console.log(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { bookShelf } = state
  return { bookShelf }
}

export default connect(mapStateToProps)(Filters)
