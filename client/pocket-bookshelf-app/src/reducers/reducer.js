//initial state
const initialState = {
  nyBestSellerList: [],
  searchList: [],
  isSearchListLoading: false,
  isBestSellerListLoading: false,
  isAddingBook: false,
  bookShelf: [],
  isSearching: false,
  filteredBookShelf: [],
  searchFilter: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BESTSELLER_LIST':
      return {
        ...state,
        nyBestSellerList: action.payload,
        isBestSellerListLoading: false,
      }
    case 'SEND_SEARCH_TO_STORE':
      return {
        ...state,
        searchList: action.payload,
        isSearching: true,
        isSearchListLoading: false,
      }
    case 'SET_BOOKSHELF':
      return {
        ...state,
        bookShelf: action.payload,
        filteredBookShelf: action.payload,
        isAddingBook: false,
      }
    case 'SEARCH_IS_LOADING':
      return { ...state, isSearchListLoading: true }
    case 'BEST_SELLERS_LOADING':
      return { ...state, isBestSellerListLoading: action.payload }
    case 'SET_IS_ADDING_BOOK':
      return { ...state, isAddingBook: true }
    case 'FILTER_BOOKSHELF':
      let tempFilteredList = state.bookShelf

      //if statement setup is for future filtering functionalities
      if (action.payload.name === 'search_text') {
        tempFilteredList = tempFilteredList.filter((item) =>
          item.title.toLowerCase().includes(action.payload.value)
        )
        return { ...state, filteredBookShelf: tempFilteredList }
      }
      return { ...state }

    case 'SORT_BOOKSHELF':
      let tempSortedBookshelf = [...state.filteredBookShelf]

      if (action.payload === 'date') {
        return { ...state, filteredBookShelf: tempSortedBookshelf }
      }
      if (action.payload === 'titleAz') {
        tempSortedBookshelf = tempSortedBookshelf.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      }

      if (action.payload === 'titleZa') {
        tempSortedBookshelf = tempSortedBookshelf.sort((a, b) =>
          b.title.localeCompare(a.title)
        )
      }

      if (action.payload === 'authorAz') {
        tempSortedBookshelf = tempSortedBookshelf.sort((a, b) =>
          a.authors.localeCompare(b.authors)
        )
      }

      if (action.payload === 'authorZa') {
        tempSortedBookshelf = tempSortedBookshelf.sort((a, b) =>
          b.authors.localeCompare(a.authors)
        )
      }

      return { ...state, filteredBookShelf: tempSortedBookshelf }
    default:
      console.log('no such action.type')
      return { state }
  }
}

export default reducer
