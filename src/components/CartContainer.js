import React from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const CartContainer = () => {
  const {amount,total,cart}=useSelector((state)=>state.cart)
  // if (amount < 1) {
  //   return (
  //     <section className='cart'>
  //       <header>
  //         <h2>your bag</h2>
  //         <h4 className='empty-cart'>is currently empty</h4>
  //       </header>
  //     </section>
  //   );
  // }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {
         cart.map((item,index)=>(
           <CartItem key={index} {...item} />
         )) 
        }
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
          total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn'>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer