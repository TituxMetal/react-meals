import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'

import { CartContext } from '~/context'

import MealForm from './MealForm'

const MealItem = styled.section(tw`flex justify-between m-4 pb-4 border-b-2 border-gray-300`)
const Text = styled.p(({ bold, color, italic, xl }) => [
  bold && tw`font-bold`,
  color && tw`text-orange-700`,
  italic && tw`italic`,
  xl && tw`text-xl`
])
const Wrapper = styled.div(() => [tw`flex flex-col`])

const Item = ({ id, name, description, price }) => {
  const { addItemHandler } = useContext(CartContext)
  const item = { id, name, price }

  const addToCartHandler = amount => addItemHandler({ ...item, amount })

  return (
    <MealItem>
      <Wrapper>
        <Text>{name}</Text>
        <Text italic>{description}</Text>
        <Text bold xl color>
          $ {price.toFixed(2)}
        </Text>
      </Wrapper>
      <Wrapper>
        <MealForm onAddToCart={addToCartHandler} />
      </Wrapper>
    </MealItem>
  )
}

export default Item
