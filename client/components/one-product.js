import React from 'react'

const Product = (props) => {
  return (
    <li>
      <div>
        <div className="flex bg-gray-200 rounded-md m-10">
          <div className="flex-shrink-0">
            <img
              className="items-center object-scale-down h-30"
              src={props.product.image}
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
            <div>Add in card</div>
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


