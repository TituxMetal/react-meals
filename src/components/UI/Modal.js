import React, { useContext } from 'react'
import { createPortal } from 'react-dom'

import { ModalContext } from '~/context'

import './Modal.css'

const Backdrop = ({ toggleModalHandler }) => (
  <div
    onClick={toggleModalHandler}
    onKeyDown={toggleModalHandler}
    className='backdrop'
  />
)

const ModalOverlay = ({ children }) => (
  <div className='modal'>
    <div className='content'>{children}</div>
  </div>
)

const portalElement = document.getElementById('overlay')

const Modal = ({ children }) => {
  const { toggleModalHandler } = useContext(ModalContext)

  return (
    <>
      {createPortal(
        <Backdrop toggleModalHandler={toggleModalHandler} />,
        portalElement
      )}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
