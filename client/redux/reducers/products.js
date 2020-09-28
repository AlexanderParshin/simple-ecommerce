const UPDATE_PRODUCT = 'UPDATE_PRODUCT'


const initialState = {
  name: "test product"
}

export default (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      return {
        ...state,
        name: action.name
      }
    }
    default:
      return state
  }
}

export function updeteProduct(name) {
  return {type: UPDATE_PRODUCT, name}
}

