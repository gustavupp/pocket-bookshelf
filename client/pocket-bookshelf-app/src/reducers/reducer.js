//initial state
const initialState = {
  nyBestSellerList: [],
  searchList: [],
  bookShelf: [],
  isSearching: false,
  filteredBookShelf: [],
  searchFilter: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BESTSELLER_LIST':
      return { ...state, nyBestSellerList: action.payload }
    case 'SEND_SEARCH_TO_STORE':
      return { ...state, searchList: action.payload, isSearching: true }
    case 'SET_BOOKSHELF':
      return {
        ...state,
        bookShelf: action.payload,
        filteredBookShelf: action.payload,
      }
    case 'FILTER_BOOKSHELF':
      console.log({ name: action.payload.name, text: action.payload.value })
      let tempFilteredList = state.bookShelf

      if (action.payload.name === 'search_text') {
        tempFilteredList = tempFilteredList.filter((item) =>
          item.title.toLowerCase().includes(action.payload.value)
        )
        console.log(tempFilteredList)
        return { ...state, filteredBookShelf: tempFilteredList }
      }

    default:
      console.log('no such action.type')
      return { state }
  }
}

export default reducer
