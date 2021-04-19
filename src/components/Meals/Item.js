import React, { useContext } from 'react'

import { CartContext } from '~/context'

import './Item.css'
import MealForm from './MealForm'

const Item = ({ id, name, description, price }) => {
  const { addItemHandler } = useContext(CartContext)
  const item = { id, name, price }

  const addToCartHandler = amount => addItemHandler({ ...item, amount })

  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>$ {price.toFixed(2)}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default Item
