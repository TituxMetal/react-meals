import React from 'react'
import tw, { styled } from 'twin.macro'

const Actions = styled.div(() => [tw`flex flex-col`, tw`md:flex-row`])
const Amount = styled.span(
  tw`font-bold ring-2 ring-gray-700 ring-opacity-30 py-1 px-3 rounded-md text-gray-700`
)
const Button = styled.button(() => [
  tw`font-bold text-lg text-red-900 text-center`,
  tw`w-12 m-1 ml-4 cursor-pointer rounded-3xl`,
  tw`ring-red-900 ring-2 ring-opacity-75 bg-transparent`,
  tw`hover:(bg-red-900 text-gray-200 ring-0) active:(bg-red-900 text-gray-200 ring-0)`
])
const Info = styled.div(tw`w-40 flex justify-between items-center`)
const Item = styled.li(
  tw`flex justify-between items-center border-b-2 border-red-800 py-4 px-0 my-4 mx-0`
)
const Name = styled.h2(tw`mb-2 text-gray-800`)
const Price = styled.span(tw`font-bold text-red-800`)
const Wrapper = styled.div``

const CartItem = ({ item, onRemove, onAdd }) => {
  const price = item.price.toFixed(2)

  return (
    <Item key={item.id}>
      <Wrapper>
        <Name>{item.name}</Name>
        <Info>
          <Price>{price}</Price>
          <Amount>x {item.amount}</Amount>
        </Info>
      </Wrapper>
      <Actions>
        <Button onClick={() => onRemove(item.id)}>-</Button>
        <Button onClick={() => onAdd({ ...item, amount: 1 })}>+</Button>
      </Actions>
    </Item>
  )
}

export default CartItem
