import React, { useState } from 'react'

import { Cart, Layout, Meals } from '~/components'
import { CartProvider, ModalContext } from '~/context'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModalHandler = () => setIsOpen(!isOpen)

  return (
    <ModalContext.Provider value={{ isOpen, toggleModalHandler }}>
      <CartProvider>
        <Layout>
          {isOpen && <Cart />}
          <Meals />
        </Layout>
      </CartProvider>
    </ModalContext.Provider>
  )
}

export default App
