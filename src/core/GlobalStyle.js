import '@fontsource/roboto'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles } from 'twin.macro'

const BaseStyles = createGlobalStyle`
  ${tw`antialiased dark:bg-gray-700 m-0`};
  body {
    ${tw`text-lg`}
  }
`

const GlobalStyle = ({ children }) => (
  <>
    <GlobalStyles />
    <BaseStyles />
    {children}
  </>
)

export default GlobalStyle
