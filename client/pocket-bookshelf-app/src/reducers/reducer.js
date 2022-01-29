//initial state
const initialState = {
  nyBestSellerList: [],
  searchList: [],
  isSearching: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BESTSELLER_LIST':
      return { ...state, nyBestSellerList: action.payload }
    case 'SEND_SEARCH_TO_STORE':
      return { ...state, searchList: action.payload, isSearching: true }
    default:
      console.log('no such action.type')
      return { state }
  }
}

export default reducer
