import React, { useState } from 'react'

import { Cart, Layout, Meals } from '~/components'
import { ModalContext } from '~/context'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModalHandler = () => setIsOpen(!isOpen)

  return (
    <ModalContext.Provider value={{ isOpen, toggleModalHandler }}>
      <Layout>
        {isOpen && <Cart />}
        <Meals />
      </Layout>
    </ModalContext.Provider>
  )
}

export default App
