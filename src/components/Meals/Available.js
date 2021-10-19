import React from 'react'
import { keyframes } from 'styled-components'
import tw, { css, styled } from 'twin.macro'

import { Card } from '~/components/UI'

import Item from './Item'

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Items = styled.ul(tw`list-none m-0 p-0`)
const Wrapper = styled.section(() => [
  tw`max-w-4xl w-11/12 my-8 mx-auto`,
  css`
    animation: ${appearAnimation} 600ms ease-out forwards;
  `
])

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
]

const Available = () => {
  const mealsList = DUMMY_MEALS.map(({ id, name, description, price }) => (
    <Item key={id} name={name} description={description} price={price} id={id} />
  ))

  return (
    <Wrapper>
      <Card>
        <Items>{mealsList}</Items>
      </Card>
    </Wrapper>
  )
}

export default Available
