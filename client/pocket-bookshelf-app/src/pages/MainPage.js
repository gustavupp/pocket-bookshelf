import React from 'react'
import SearchBar from '../components/SearchBar'
import BottomNavBar from '../components/BottomNavBar'
import Loading from '../components/Loading'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/mainPage.css'

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

      <div className="card-container-wrapper">
        <div className="user-welcome-container">
          {isAuthenticated ? (
            <>
              <h3>Welcome {nickname || name}!</h3>
              <img
                src={picture}
                alt="user profile pic"
                style={{
                  borderRadius: '50%',
                  width: '60px',
                  marginLeft: '15px',
                }}
              />
            </>
          ) : null}
        </div>
        <h1 className="main-page-title">
          {isSearching ? 'Search Result' : 'Best Sellers'}
        </h1>
        <div className="underline"></div>
        <div className="card-container">
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
