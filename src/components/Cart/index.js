import React, { useContext } from 'react'

import { Modal } from '~/components/UI'
import { ModalContext } from '~/context'

import './CartItems.css'

const Cart = () => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
  const { toggleModalHandler } = useContext(ModalContext)

  return (
    <Modal>
      <ul className='cart-items'>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={toggleModalHandler}>
          Close
        </button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
