import React from 'react'

import { CartIcon } from '~/components/Cart'
import './HeaderCartButton.module.css'

const HeaderCartButton = () => (
  <button className='button'>
    <span className='icon'>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className='badge'>3</span>
  </button>
)

export default HeaderCartButton
