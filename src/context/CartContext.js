import { createContext } from 'react'

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {}
}

const CartContext = createContext(initialState)

export default CartContext
