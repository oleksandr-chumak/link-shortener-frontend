import React, { ForwardedRef, forwardRef, useMemo } from 'react'
import { IconWrapper, Wrapper } from './text-field-with-password.styled'
import { Field } from '../TextField/text-field.styled'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { DetailedFieldProps } from '../../../../../types'
import { usePasswordToggle } from '../../../../../features'


export const TextFieldWithPassword = forwardRef((
  props: DetailedFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [currentType, currentTypeToggle] = usePasswordToggle()
  const generateIcon = useMemo(() => {
    return (
      <IconWrapper type='button' onClick={currentTypeToggle}>
        {currentType === 'password' ? <BsEye size='20px' /> : <BsEyeSlash size='20px' />}
      </IconWrapper>
    )
  }, [currentType])
  return (
    <Wrapper>
      <Field {...props} ref={ref} type={currentType}></Field>
      {generateIcon}
    </Wrapper>
  )
})
TextFieldWithPassword.displayName = 'TextFieldWithPassword'