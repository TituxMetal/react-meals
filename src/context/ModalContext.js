import { createContext } from 'react'

const initialState = {
  isOpen: null,
  toggleModalHandler: () => {}
}

const ModalContext = createContext(initialState)

export default ModalContext
