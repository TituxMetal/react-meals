import React from 'react'

import { Input } from '~/components/UI'
import './MealForm.css'

const MealForm = () => (
  <form className='form'>
    <Input
      label='Amount'
      id='amount'
      type='number'
      min='1'
      max='5'
      step='1'
      defaultValue='1'
    />
    <button type='submit'>+ Add</button>
  </form>
)

export default MealForm
