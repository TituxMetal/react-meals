import React from 'react'

import './Item.css'

const Item = ({ name, description, price }) => (
  <li className='meal'>
    <div>
      <h3>{name}</h3>
      <div className='description'>{description}</div>
      <div className='price'>${price.toFixed(2)}</div>
    </div>
  </li>
)

export default Item
