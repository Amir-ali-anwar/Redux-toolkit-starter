import React from 'react'
import {ChevronUp,ChevronDown} from '../icons'
const CartItem = () => {
  return (
    <article className='cart-item'>
      <img  />
      <div>
        <h4>product title</h4>
        <h4 className='item-price'>price</h4>
        <button
          className='remove-btn'
        >
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
        >
          <ChevronUp />
        </button>
        <p className='amount'>124</p>
        <button
          className='amount-btn'
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem