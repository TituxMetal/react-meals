import React, { useContext } from 'react'

import { CartIcon } from '~/components/UI'
import { CartContext, ModalContext } from '~/context'

import './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  const { toggleModalHandler } = useContext(ModalContext)
  const { items } = useContext(CartContext)
  const cartItemAmount = items.reduce((current, item) => current + item.amount, 0)

  return (
    <button className='button' onClick={toggleModalHandler}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{cartItemAmount}</span>
    </button>
  )
}

export default HeaderCartButton
