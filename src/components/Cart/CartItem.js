import React from 'react'

import './CartItem.css'

const CartItem = ({ item, onRemove, onAdd }) => {
  const price = item.price.toFixed(2)

  return (
    <li key={item.id} className='cart-item'>
      <div>
        <h2>{item.name}</h2>
        <div className='info'>
          <span className='price'>{price}</span>
          <span className='amount'>x {item.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={() => onRemove(item.id)}>-</button>
        <button onClick={() => onAdd({ ...item, amount: 1 })}>+</button>
      </div>
    </li>
  )
}

export default CartItem
