import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'

import { Modal } from '~/components/UI'
import { CartContext, ModalContext } from '~/context'

import CartItem from './CartItem'

const Actions = styled.div(tw`text-right`)
const Button = styled.button(({ bordered }) => [
  tw`font-bold text-lg text-gray-100 text-center`,
  tw`py-1 px-4 ml-4 cursor-pointer rounded-3xl`,
  tw`bg-red-700 border-2 border-transparent`,
  tw`hover:(bg-red-900 text-gray-100) active:(bg-red-900 text-gray-200)`,
  bordered && tw`text-red-900 bg-transparent border-2 border-red-900`
])
const Info = styled.div(tw`flex justify-between items-center font-bold text-2xl m-0 my-4`)
const Items = styled.ul(tw`list-none m-0 p-0`)

const Cart = () => {
  const { items, totalAmount, addItemHandler, removeItemHandler } = useContext(CartContext)
  const { toggleModalHandler } = useContext(ModalContext)
  const hasItems = items.length > 0

  return (
    <Modal>
      <Items>
        {items.map(item => (
          <CartItem key={item.id} onAdd={addItemHandler} onRemove={removeItemHandler} item={item} />
        ))}
      </Items>
      <Info>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </Info>
      <Actions>
        <Button onClick={toggleModalHandler}>Close</Button>
        {hasItems && <Button bordered>Order</Button>}
      </Actions>
    </Modal>
  )
}

export default Cart
