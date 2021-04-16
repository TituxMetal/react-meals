import React from 'react'

import './Input.css'

const Input = ({ id, label, ...rest }) => (
  <div className='input'>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
)

export default Input
