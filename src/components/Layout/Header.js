import React from 'react'
import tw, { styled } from 'twin.macro'

import mealsImage from '~/assets/meals.jpg'

import HeaderCartButton from './HeaderCartButton'

const Brand = styled.h1(tw`px-4 text-xl font-bold`)
const Head = styled.header(() => [
  tw`bg-red-800 text-gray-50 flex justify-between items-center p-0 shadow-lg z-10`,
  tw`fixed top-0 left-0 w-full h-20`
])
const Image = styled.img(tw`w-full h-full object-cover`)
const ImgContainer = styled.div(tw`w-full h-96 z-0 overflow-hidden`)

const Header = () => (
  <>
    <Head>
      <Brand>ReactMeals</Brand>
      <HeaderCartButton />
    </Head>
    <ImgContainer>
      <Image src={mealsImage} alt='A table full of delicious food!' />
    </ImgContainer>
  </>
)

export default Header
