//initial state
const initialState = {
  nyBestSellerList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BESTSELLER_LIST':
      return { ...state, nyBestSellerList: action.payload }
    default:
      return state
  }
}

export default reducer
