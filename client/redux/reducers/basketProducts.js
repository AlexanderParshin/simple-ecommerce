
const UPDATE_BASKET = 'UPDATE_BASKET'
const DEL_PRODUCT_TO_BASKET = 'DEL_PRODUCT_TO_BASKET'
const DEC_PRODUCT_TO_BASKET = 'DEC_PRODUCT_TO_BASKET'
const INC_PRODUCT_TO_BASKET = 'INC_PRODUCT_TO_BASKET'

// const initialState = {id: 0}
const initialState = { list: {id: 0} }
// const initialState = { type: DEL_PRODUCT_TO_BASKET, id: 0}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASKET: {
      // const id = action.id
      // const addBasket = { [id] : 1}
      // list: action.list
      // const newProductsBasket = { ...state, ...{ [action.id]: 1 } }
      // const addBasket = { ...state, ...action.list }

      const { id } = action
      const newId = { [id]: 1 }
      const newIdList = { list: { ...state.list, ...newId } }
      const newProductsBasket = { ...state, ...newIdList }
      console.log(newProductsBasket)
      return newProductsBasket

      // state[action.id] = 1
      // return state
    }
    case DEL_PRODUCT_TO_BASKET: {
      const { id } = action
      const newId = { [id]: 0 }
      const newIdList = { list: { ...state.list, ...newId } }
      const newProductsBasket = { ...state, ...newIdList }
      console.log(newProductsBasket)
      return newProductsBasket
    }
    case INC_PRODUCT_TO_BASKET: {
      const { id } = action
      const number = state.list[id]
      const newNumber = number < 1000 ? number + 1 : number
      const newId = { [id]: newNumber }
      const newIdList = { list: { ...state.list, ...newId } }
      const newProductsBasket = { ...state, ...newIdList }
      console.log(newProductsBasket)
      return newProductsBasket
    }
    case DEC_PRODUCT_TO_BASKET: {
      const { id } = action
      const number = state.list[id]
      const newNumber = number > 1 ? number - 1 : number
      const newId = { [id]: newNumber }
      const newIdList = { list: { ...state.list, ...newId } }
      const newProductsBasket = { ...state, ...newIdList }
      console.log(newProductsBasket)
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

export function incIdProduct(id) {
  return async (dispatch) => {
    const newList = { type: INC_PRODUCT_TO_BASKET, id }
    dispatch(newList)
    return newList
  }
}

export function decIdProduct(id) {
  return async (dispatch) => {
    const newList = { type: DEC_PRODUCT_TO_BASKET, id }
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