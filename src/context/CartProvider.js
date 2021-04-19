import React, { useReducer } from 'react'

import { actions, cartReducer } from '~/store'

import CartContext from './CartContext'

const initialState = {
  items: [],
  totalAmount: 0
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const addItemHandler = item => dispatch({ type: actions.ADD, payload: item })
  const removeItemHandler = id =>
    dispatch({ type: actions.REMOVE, payload: id })

  const cartState = {
    ...state,
    addItemHandler,
    removeItemHandler
  }

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  )
}

export default CartProvider
