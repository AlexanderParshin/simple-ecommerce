
const UPDATE_BASKET = 'UPDATE_BASKET'
const DEL_PRODUCT_TO_BASKET = 'DEL_PRODUCT_TO_BASKET'

const initialState = { type: DEL_PRODUCT_TO_BASKET, id: '0' }

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASKET: {
      // const id = action.id
      // const addBasket = { [id] : 1}
      const newProductsBasket = { ...state, ...{ [action.id]: 1 } }
      console.log(newProductsBasket)
      return newProductsBasket
    }
    case DEL_PRODUCT_TO_BASKET: {
      // const id = action.id
      // const addBasket = { [id] : 0}
      const newProductsBasket = { ...state, ...{ [action.id]: 0 } }
      // state[id] = 0
      // console.log(newProductsBasket)
      return newProductsBasket
    }
    default:
      return state
  }
}

export function addIdProduct(id) {
  return async (dispatch) => {
    const newList = { type: UPDATE_BASKET, id }
    dispatch(newList)
    return newList
  }
}

export function delIdProduct(id) {
  return async (dispatch) => {
    const newList = { type: DEL_PRODUCT_TO_BASKET, id }
    dispatch(newList)
    return newList
  }
}

/*
export function getBasketData() {
  return async (dispatch) => {
    await axios.get('/api/v1/products').then(({ data }) => {
      const newProducts = { type: UPDATE_PRODUCT, list: data }
      dispatch(newProducts)
      return newProducts
    })
  }
}
*/