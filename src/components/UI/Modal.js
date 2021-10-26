import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { keyframes } from 'styled-components'
import tw, { css, styled } from 'twin.macro'

import { ModalContext } from '~/context'

const slidedownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const backdropStyle = [tw`fixed top-0 left-0 w-full h-screen z-20`, tw`bg-gray-900 opacity-75`]
const modalStyle = [
  tw`fixed p-4 top[8vh] left[10vw] width[80vw] max-height[88vh] overflow-y-auto`,
  tw`z-30 shadow-md bg-gray-50`,
  css`
    animation: ${slidedownAnimation} 500ms ease-out forwards;
  `
]

const Backdrop = ({ toggleModalHandler }) => (
  <div css={backdropStyle} onClick={toggleModalHandler} onKeyDown={toggleModalHandler} />
)

const ModalOverlay = styled.div(() => modalStyle)

const portalElement = document.getElementById('overlay')

const Modal = ({ children }) => {
  const { toggleModalHandler } = useContext(ModalContext)

  return (
    <>
      {createPortal(<Backdrop toggleModalHandler={toggleModalHandler} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
