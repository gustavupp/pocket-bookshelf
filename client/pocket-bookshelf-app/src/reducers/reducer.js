//initial state
const initialState = {
  nyBestSellerList: [],
  searchList: [],
  bookShelf: [],
  isSearching: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BESTSELLER_LIST':
      return { ...state, nyBestSellerList: action.payload }
    case 'SEND_SEARCH_TO_STORE':
      return { ...state, searchList: action.payload, isSearching: true }
    case 'SET_BOOKSHELF':
      return { ...state, bookShelf: action.payload }
    default:
      console.log('no such action.type')
      return { state }
  }
}

export default reducer
