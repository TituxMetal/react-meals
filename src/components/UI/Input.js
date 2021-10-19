import React, { forwardRef } from 'react'
import tw from 'twin.macro'

const Field = tw.input`w-14 rounded-md border-2 border-gray-200 pl-2`
const Label = tw.label`font-bold mr-4`
const Wrapper = tw.div`flex items-center mb-2`

const Input = ({ id, label, ...rest }, ref) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Field id={id} ref={ref} {...rest} />
  </Wrapper>
)

Input.displayName = 'Input'

export default forwardRef(Input)
