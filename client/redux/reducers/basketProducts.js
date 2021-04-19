
const UPDATE_BASKET = 'UPDATE_BASKET'
const DEL_PRODUCT_TO_BASKET = 'DEL_PRODUCT_TO_BASKET'
const DEC_PRODUCT_TO_BASKET = 'DEC_PRODUCT_TO_BASKET'
const INC_PRODUCT_TO_BASKET = 'INC_PRODUCT_TO_BASKET'

const initialState = { list: {id: 0} }

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASKET: {
      const { id } = action
      const newId = { [id]: 1 }
      const newIdList = { list: { ...state.list, ...newId } }
      const newProductsBasket = { ...state, ...newIdList }
      console.log(newProductsBasket)
      return newProductsBasket
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
