import React from 'react'
import { useDispatch } from 'react-redux'
import { incIdProduct, decIdProduct, delIdProduct } from '../redux/reducers/basketProducts'

const OneProductBasket = (props) => {
  const dispatch = useDispatch()
  const { id } = props.product

  async function incNumberProduct() {
    dispatch(incIdProduct(id))
  }

  async function decNumberProduct() {
    dispatch(decIdProduct(id))
  }

  async function delNumberProduct() {
    dispatch(delIdProduct(id))
  }


  return (
    <tr>
      <td> </td>
      <td>{props.product.title}</td>

      <td>
        <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
          <button
            className="font-semibold border-r bg-gray-700 hover:bg-gray-600 text-white border-gray-400 h-full
        w-20 flex rounded-l focus:outline-none cursor-pointer"
            type="button"
            onClick={decNumberProduct}
          >
            <span className="m-auto">-</span>
          </button>
          <input
            type="hidden"
            className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
            readOnly
            name="custom-input-number"
          />
          <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
            <span>{props.number}</span>
          </div>

          <button
            className="font-semibold border-l  bg-gray-700 hover:bg-gray-600 text-white border-gray-400 h-full
        w-20 flex rounded-r focus:outline-none cursor-pointer"
            type="button"
            onClick={incNumberProduct}
          >
            <span className="m-auto">+</span>
          </button>
        </div>
      </td>

      <td>{props.product.price}</td>
      <td>{props.product.price * props.number}</td>
      <td>
        <button
          className="font-semibold border-l  bg-gray-700 hover:bg-gray-600 text-white border-gray-400 h-full
        w-20 flex rounded-r focus:outline-none cursor-pointer"
          type="button"
          onClick={delNumberProduct}
        >
          <span className="m-auto">Del</span>
        </button>
      </td>
    </tr>
  )
}

export default OneProductBasket

/*
      <div className="ml-2">{props.product.image}</div>
      <div className="">{props.product.title}</div>
      <div className="">{props.product.price}</div>
      <div className="mr-2">{props.number}</div>
*/