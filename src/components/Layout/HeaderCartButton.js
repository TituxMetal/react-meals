import React, { useContext } from 'react'

import { CartIcon } from '~/components/UI'
import { ModalContext } from '~/context'

import './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  const { toggleModalHandler } = useContext(ModalContext)

  return (
    <button className='button' onClick={toggleModalHandler}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  )
}

export default HeaderCartButton
