import React from 'react'
import { createPortal } from 'react-dom'

import './Modal.css'

const Backdrop = () => <div className='backdrop' />

const ModalOverlay = ({ children }) => (
  <div className='modal'>
    <div className='content'>{children}</div>
  </div>
)

const portalElement = document.getElementById('overlay')

const Modal = ({ children }) => (
  <>
    {createPortal(<Backdrop />, portalElement)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
  </>
)

export default Modal
