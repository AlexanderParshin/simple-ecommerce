import axios from 'axios'

const UPDATE_PRODUCT = 'UPDATE_PRODUCT'


const initialState = {
  list: [
    {
      id: '0',
      title: '',
      image: '',
      price: 0,
      description: ''
    }
  ]
}

export default (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      const newProducts = { ...state, list: action.list }
      console.log(newProducts)
      return newProducts
    }
    default:
      return state
  }
}

/*
export function updeteProduct(data) {
  return {type: UPDATE_PRODUCT, data}
}
*/

export function getProductData() {
  return async (dispatch) => {
    await axios.get('/api/v1/products').then(({ data }) => {
      const newProducts = { type: UPDATE_PRODUCT, list: data }
      dispatch(newProducts)
      return newProducts
    })
  }
}