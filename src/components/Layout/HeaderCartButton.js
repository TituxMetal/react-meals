import React, { useContext, useEffect, useState } from 'react'
import { keyframes } from 'styled-components'
import tw, { styled, css } from 'twin.macro'

import { CartIcon } from '~/components/UI'
import { CartContext, ModalContext } from '~/context'

const bumpAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`

const Badge = styled.span(({ animate }) => [
  tw`bg-red-500 py-1 px-4 rounded-full ml-4 font-bold`,
  animate &&
    css`
      animation: ${bumpAnimation} 300ms ease-out;
    `
])
const Button = styled.button(() => [
  tw`cursor-pointer bg-red-900 py-3 px-12 m-2 flex justify-around items-center rounded-3xl font-bold`,
  tw`hover:bg-red-700 active:bg-red-700`
])
const Icon = styled.span(tw`w-6 h-6 mr-2`)
const Text = styled.span(tw`px-3`)

const HeaderCartButton = () => {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const { toggleModalHandler } = useContext(ModalContext)
  const { items } = useContext(CartContext)
  const cartItemAmount = items.reduce((current, item) => current + item.amount, 0)

  useEffect(() => {
    if (items.length === 0) {
      return null
    }

    setIsHighlighted(true)

    const timer = setTimeout(() => setIsHighlighted(false), 300)

    return () => clearTimeout(timer)
  }, [items])

  return (
    <Button onClick={toggleModalHandler}>
      <Icon>
        <CartIcon />
      </Icon>
      <Text>Your Cart</Text>
      <Badge animate={isHighlighted}>{cartItemAmount}</Badge>
    </Button>
  )
}

export default HeaderCartButton
