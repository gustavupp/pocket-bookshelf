import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BookBottomNavbar from '../components/BookBottomNavbar'
import HeaderBookDetails from '../components/HeaderBookDetails'
import BookInformation from '../components/BookInformation'

const BookDetailsPage = ({ nyBestSellerList, searchList, isSearching }) => {
  const { id } = useParams()
  const [bookClickedOn, setBookClickedOn] = useState([])

  useEffect(() => {
    if (nyBestSellerList || searchList) {
      //check if handling search list or best seller list
      const list = isSearching ? searchList : nyBestSellerList
      setBookClickedOn(list.find((item) => item.id === id))
    } else {
      //if the page is refreshed then fetch the individual book and display
      fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          const {
            id,
            volumeInfo: { categories = 'Uncategorized' } = {
              categories: 'No Category',
            },
            volumeInfo: { title = 'No title available' },
            volumeInfo: { subtitle = 'No Subtitle' } = {},
            volumeInfo: { authors },
            volumeInfo: {
              imageLinks: {
                thumbnail = 'https://dummyimage.com/70x100/00f/fff.png&text=No+Cover!',
              } = {},
            },
            volumeInfo: { description = 'No Description' },
            volumeInfo: { language },
            volumeInfo: { pageCount },
            volumeInfo: { publishedDate },
            saleInfo: { buyLink = 'No Link' } = { saleInfo: 'No Sale Info' },
            volumeInfo: {
              industryIdentifiers: [
                ,
                { identifier = 'No identifier' } = {
                  identifier: 'No identifier',
                },
              ] = [, { indetifier: 'No identifier' }],
            },
          } = data
          setBookClickedOn({
            id,
            categories,
            title,
            subtitle,
            authors,
            thumbnail,
            description,
            language,
            pageCount,
            publishedDate,
            buyLink,
            identifier,
          })
        })
    }
  }, [])

  return (
    <div>
      <HeaderBookDetails {...bookClickedOn} />
      <BookInformation {...bookClickedOn} />
      <BookBottomNavbar {...bookClickedOn} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { searchList, nyBestSellerList, isSearching } = state
  return { searchList, nyBestSellerList, isSearching }
}

export default connect(mapStateToProps)(BookDetailsPage)
