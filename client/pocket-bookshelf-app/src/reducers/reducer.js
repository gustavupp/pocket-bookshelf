//initial state
const initialState = {
  nyBestSellerList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BESTSELLER_LIST':
      return { nyBestSellerList: action.payload }
    default:
      console.log('no such action.type')
      return { state }
  }
}

export default reducer
