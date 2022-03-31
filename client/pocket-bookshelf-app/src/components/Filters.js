import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles/filters.module.scss'

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
    <section className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search Your Shelf by Title"
          name="search_text"
          value={searchFilter}
          onChange={handleFilterChange}
        />
      </div>
      <div className={styles.dropdownContainer}>
        <label htmlFor={styles.sort}>Sort by:&nbsp;</label>
        <select
          onChange={(e) => handleSortChange(e)}
          className={styles.sort}
          name="sort"
          id="sort"
        >
          <option value="date">Date Added</option>
          <option value="titleAz">Title (A-Z)</option>
          <option value="titleZa">Title (Z-A)</option>
          <option value="authorAz">Author (A-Z)</option>
          <option value="authorZa">Author (Z-A)</option>
        </select>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  const { searchFilter } = state
  return { searchFilter }
}

export default connect(mapStateToProps)(Filters)
