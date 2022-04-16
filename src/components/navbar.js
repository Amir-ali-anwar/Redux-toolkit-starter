import React from 'react'
import { CartIcon } from '../icons';
const navbar = () => {
  return (
    <nav>
    <div className='nav-center'>
      <h3>redux toolkit</h3>
      <div className='nav-container'>
        <CartIcon />
        <div className='amount-container'>
          <p className='total-amount'>12</p>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default navbar