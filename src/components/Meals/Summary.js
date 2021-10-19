import React from 'react'
import tw, { styled } from 'twin.macro'

const Wrapper = styled.section(
  tw`max-w-2xl m-auto bg-gray-600 -mt-40 relative text-gray-100 rounded-lg p-4 shadow-xl`
)
const Text = styled.p(tw`mt-4 text-lg`)
const Title = styled.h2(tw`text-2xl text-center font-bold`)

const Summary = () => (
  <Wrapper>
    <Title>Delicious Food, Delivery To You</Title>
    <Text>
      Choose your favorite meal from our broad selection of available meals and enjoy a delicious
      lunch or dinner at home.
    </Text>
    <Text>
      All our meals are cooked with high-quality ingredients, just-in-time and of course by
      experenced chefs!
    </Text>
  </Wrapper>
)

export default Summary
