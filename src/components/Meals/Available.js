import React, { useCallback, useEffect, useState } from 'react'
import { keyframes } from 'styled-components'
import tw, { css, styled } from 'twin.macro'

import { Card } from '~/components/UI'
import { useHttp } from '~/hooks'

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

const Available = () => {
  const [items, setItems] = useState([])
  const { isLoading, error, sendRequest } = useHttp()
  const url = process.env.API_URI

  const fetchMeals = useCallback(() => sendRequest({ url }, setItems), [])

  useEffect(() => {
    fetchMeals()
  }, [fetchMeals])

  const mealsList = items.map(({ id, name, description, price }) => (
    <Item key={id} name={name} description={description} price={price} id={id} />
  ))

  return (
    <Wrapper>
      {error && <p>{error}</p>}
      {!isLoading && items.length > 0 && (
        <Card>
          <Items>{mealsList}</Items>
        </Card>
      )}
      {isLoading && <p>Loading...</p>}
    </Wrapper>
  )
}

export default Available
