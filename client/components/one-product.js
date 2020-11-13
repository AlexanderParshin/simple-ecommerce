import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIdProduct, delIdProduct } from '../redux/reducers/basketProducts'

const Product = (props) => {

  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()
  const {id} = props.product

  const productBasketID = useSelector((s) => s.basketProducts.list)
  console.log(productBasketID)

  useEffect(() => {
    const productId = productBasketID[id]
    // const showButton = typeof productId === 'undefined'
    const showButton = productId > 0
    setIsShow(showButton)
  }, [productBasketID])

  async function addProductToCard() {
    dispatch(addIdProduct(id))
  }

    async function delProductToCard() {
      dispatch(delIdProduct(id))
    }

  return (
    <li>
      <div>
        <div className="flex bg-gray-200 rounded-md m-10">
          <div className="flex-shrink-0">
            <img
              className="items-center object-scale-down h-30"
              // src={props.product.image}
              alt={props.product.title}
            />
            <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
              <div>Title: {props.product.title}</div>
            </div>
            <div className="truncate">
              <div>Img: {props.product.image}</div>
            </div>
            <div className="truncate">
              <div>Price: {props.product.price}</div>
            </div>
            <div className="truncate">
              <div>Description: {props.product.description}</div>
            </div>
            <div>
              {!isShow && (
                <button
                  type="button"
                  onClick={addProductToCard}
                  className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white font-normal py-2 px-4 rounded"
                >
                  Add in card
                </button>
              )}
              {isShow && (
                <button
                  type="button"
                  onClick={delProductToCard}
                  className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white font-normal py-2 px-4 rounded"
                >
                  Delete in card
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Product


/*

<div>
            <img src={props.product.image} alt="lorem" />
          </div>

*/


