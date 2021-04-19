import React, { forwardRef } from 'react'

import './Input.css'

const Input = ({ id, label, ...rest }, ref) => (
  <div className='input'>
    <label htmlFor={id}>{label}</label>
    <input id={id} ref={ref} {...rest} />
  </div>
)

Input.displayName = 'Input'

export default forwardRef(Input)
