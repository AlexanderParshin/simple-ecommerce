const UPDATE_PRODUCT = 'UPDATE_PRODUCT'


const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      return [
        ...state,
        /*
        {
          title: action.data.title,
          image: action.data.image,
          price: action.data.price,
          description: action.data.description
        }
        */
        ...action.data
      ]
    }
    default:
      return state
  }
}

export function updeteProduct(data) {
  return {type: UPDATE_PRODUCT, data}
}

/*
title: String,
  image: String,
  price: Number,
  description: String
  */