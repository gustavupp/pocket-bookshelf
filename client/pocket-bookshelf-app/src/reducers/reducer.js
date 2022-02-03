//initial state
const initialState = {
  nyBestSellerList: [],
  searchList: [],
  isSearchListLoading: false,
  isBestSellerListLoading: false,
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
      return { ...state, searchList: action.payload, isSearching: true }
    case 'SET_BOOKSHELF':
      return {
        ...state,
        bookShelf: action.payload,
        filteredBookShelf: action.payload,
      }
    case 'BEST_SELLERS_LOADING':
      return { ...state, isBestSellerListLoading: action.payload }
    case 'FILTER_BOOKSHELF':
      //if statement setup is for when I add more functionalities for the filters
      let tempFilteredList = state.bookShelf

      if (action.payload.name === 'search_text') {
        tempFilteredList = tempFilteredList.filter((item) =>
          item.title.toLowerCase().includes(action.payload.value)
        )
        return { ...state, filteredBookShelf: tempFilteredList }
      }
      return { ...state }
    default:
      console.log('no such action.type')
      return { state }
  }
}

export default reducer
