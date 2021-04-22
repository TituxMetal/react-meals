import React, { useContext, useEffect, useState } from 'react'

import { CartIcon } from '~/components/UI'
import { CartContext, ModalContext } from '~/context'

import './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const { toggleModalHandler } = useContext(ModalContext)
  const { items } = useContext(CartContext)
  const cartItemAmount = items.reduce(
    (current, item) => current + item.amount,
    0
  )
  const badgeClasses = `badge${isHighlighted ? ' bump' : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return null
    }

    setIsHighlighted(true)

    const timer = setTimeout(() => setIsHighlighted(false), 300)

    return () => clearTimeout(timer)
  }, [items])

  return (
    <button className='button' onClick={toggleModalHandler}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={badgeClasses}>{cartItemAmount}</span>
    </button>
  )
}

export default HeaderCartButton
