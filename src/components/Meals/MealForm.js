import React, { useRef, useState } from 'react'

import { Input } from '~/components/UI'
import './MealForm.css'

const MealForm = ({ onAddToCart }) => {
  const [isInvalid, setIsInvalid] = useState()
  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()
    setIsInvalid(null)
    const amountValue = amountInputRef.current.value

    const invalidAmount =
      amountValue.trim().length === 0 || amountValue < 1 || amountValue > 5

    return invalidAmount
      ? setIsInvalid(true)
      : onAddToCart(+amountInputRef.current.value)
  }

  return (
    <form className='form' onSubmit={submitHandler} noValidate>
      <Input
        label='Amount'
        id='amount'
        type='number'
        min='1'
        max='5'
        step='1'
        defaultValue='1'
        ref={amountInputRef}
      />
      <button type='submit'>+ Add</button>
      {isInvalid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  )
}

export default MealForm
