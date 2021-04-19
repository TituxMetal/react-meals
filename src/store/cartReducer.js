import { actions } from './actions'

const cartReducer = (state, { type, payload }) => {
  if (type === actions.ADD) {
    const totalAmount = state.totalAmount + payload.price * payload.amount

    return { ...state, totalAmount, items: [...state.items, payload] }
  }

  return state
}

export default cartReducer
