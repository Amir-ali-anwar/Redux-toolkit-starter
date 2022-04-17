import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, increasecart, decreasecart } from '../features/cart/cartSlice'
const CartItem = ({ title, price, img, amount, id }) => {
  // console.log(id)
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => dispatch(increasecart(id))}
        >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              // return;
            }
            dispatch(decreasecart({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem