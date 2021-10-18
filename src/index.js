import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from '~/core'

import App from './App'

const element = document.getElementById('root')
ReactDOM.render(
  <GlobalStyle>
    <App />
  </GlobalStyle>,
  element
)
