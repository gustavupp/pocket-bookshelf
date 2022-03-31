import React from 'react'
import SearchBar from '../components/SearchBar'
import BottomNavBar from '../components/BottomNavBar'
import Loading from '../components/Loading'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/mainPage.module.scss'

const MainPage = ({
  nyBestSellerList,
  searchList,
  isSearching,
  isBestSellerListLoading,
  isSearchListLoading,
}) => {
  const {
    isAuthenticated,
    user: { nickname = '', name = '', picture = '' } = {},
  } = useAuth0()

  if (isBestSellerListLoading || isSearchListLoading)
    return (
      <>
        <SearchBar />
        <Loading />
        <BottomNavBar />
      </>
    )

  //check if dealing with search or best seller list
  let list = isSearching ? searchList : nyBestSellerList

  return (
    <main>
      <SearchBar />

      <div className={styles.wrapper}>
        <div className={styles.userContainer}>
          {isAuthenticated ? (
            <>
              <h3>Welcome {nickname || name}!</h3>
              <img
                className={styles.userImg}
                src={picture}
                alt="user profile pic"
              />
            </>
          ) : null}
        </div>
        <h1 className={styles.title}>
          {isSearching ? 'Search Result' : 'Best Sellers'}
        </h1>
        <div className="underline"></div>
        <div className={styles.card}>
          {list &&
            list.map((item, index) => {
              return <Card key={index} {...item} />
            })}
        </div>
      </div>
      <BottomNavBar />
    </main>
  )
}

const mapStateToProps = (state) => {
  const {
    nyBestSellerList,
    searchList,
    isSearching,
    isBestSellerListLoading,
    isSearchListLoading,
  } = state
  return {
    nyBestSellerList,
    searchList,
    isSearching,
    isBestSellerListLoading,
    isSearchListLoading,
  }
}

export default connect(mapStateToProps)(MainPage)
