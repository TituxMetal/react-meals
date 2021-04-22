import React, { useContext } from 'react'

import { Modal } from '~/components/UI'
import { CartContext, ModalContext } from '~/context'

import CartItem from './CartItem'

import './Cart.css'

const Cart = () => {
  const { items, totalAmount, addItemHandler, removeItemHandler } = useContext(
    CartContext
  )
  const { toggleModalHandler } = useContext(ModalContext)
  const hasItems = items.length > 0

  return (
    <Modal>
      <ul className='cart-items'>
        {items.map(item => (
          <CartItem
            key={item.id}
            onAdd={addItemHandler}
            onRemove={removeItemHandler}
            item={item}
          />
        ))}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={toggleModalHandler}>
          Close
        </button>
        {hasItems && <button className='button'>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
