import { actions } from './actions'

const findItemIndex = (items, id) => items.findIndex(item => item.id === id)

const updateItem = (items, amount, id) =>
  items.map(item =>
    item.id === id ? { ...item, amount: item.amount + amount } : { ...item }
  )

const cartReducer = (state, { type, payload }) => {
  if (type === actions.ADD) {
    const totalAmount = state.totalAmount + payload.price * payload.amount
    const existingItemIndex = findItemIndex(state.items, payload.id)

    if (existingItemIndex === -1) {
      return { ...state, totalAmount, items: [...state.items, payload] }
    }

    const updatedItems = updateItem(state.items, payload.amount, payload.id)

    return { ...state, totalAmount, items: updatedItems }
  }

  if (type === actions.REMOVE) {
    const existingItemIndex = findItemIndex(state.items, payload)
    const existingItem = state.items[existingItemIndex]
    const totalAmount = state.totalAmount - existingItem.price

    if (existingItem.amount === 1) {
      return {
        ...state,
        totalAmount,
        items: state.items.filter(item => item.id !== payload)
      }
    }

    const updatedItems = updateItem(state.items, -1, payload)

    return { ...state, totalAmount, items: updatedItems }
  }

  return state
}

export default cartReducer
