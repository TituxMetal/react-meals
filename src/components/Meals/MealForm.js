import React, { useRef, useState } from 'react'
import tw, { styled } from 'twin.macro'

import { Input } from '~/components/UI'

const Button = styled.button(() => [
  tw`font-bold text-lg text-gray-100 text-center`,
  tw`py-1 px-4 ml-4 cursor-pointer rounded-3xl`,
  tw`bg-red-700 border-2 border-transparent`,
  tw`hover:(bg-red-900 text-gray-100) active:(bg-red-900 text-gray-200)`
])
const Form = styled.form(tw`flex flex-col items-end justify-between`)
const Text = styled.p(tw`font-bold text-red-800 mt-2`)

const MealForm = ({ onAddToCart }) => {
  const [isInvalid, setIsInvalid] = useState()
  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()
    setIsInvalid(null)
    const amountValue = amountInputRef.current.value

    const invalidAmount = amountValue.trim().length === 0 || amountValue < 1 || amountValue > 5

    return invalidAmount ? setIsInvalid(true) : onAddToCart(+amountInputRef.current.value)
  }

  return (
    <Form onSubmit={submitHandler} noValidate>
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
      <Button type='submit'>+ Add</Button>
      {isInvalid && <Text>Please enter a valid amount(1-5).</Text>}
    </Form>
  )
}

export default MealForm
