import React, { ForwardedRef, forwardRef, useMemo, useState } from 'react'
import { FieldContainer, IconWrapper, Label, LabelWrapper, ResetPassword, Wrapper } from './text-field.styled'
import { IconClientComponent } from '../IconClient/icon-client.component'
import { TextFieldProps } from './text-field.types'
import { fields } from './text-field.constants'


export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      iconType,
      fieldType = 'text',
      withResetPasswordLabel,
      ...props
    }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const handleFocus = () => {
      setIsFocus(true)
    }

    const handleBlur = () => {
      setIsFocus(false)
    }

    const generateLabel = useMemo(() => {
      if (!label) {
        return null
      }
      if (!withResetPasswordLabel) {
        return <Label $isFocus={isFocus}>{label}</Label>
      }
      return (
        <LabelWrapper>
          <Label $isFocus={isFocus}>{label}</Label>
          <ResetPassword to='../reset'>Forgot password?</ResetPassword>
        </LabelWrapper>
      )
    }, [label, isFocus])

    const generateIcon = useMemo(() => {
      if (!iconType) {
        return null
      }

      return (
        <IconWrapper>
          <IconClientComponent iconType={iconType} isFocus={isFocus} />
        </IconWrapper>
      )
    }, [iconType, isFocus])

    const generateField = useMemo(() => {
      const Field = fields[fieldType]
      return <Field {...props} onFocus={handleFocus} onBlur={handleBlur} ref={ref} />
    }, [props.value])

    return (
      <Wrapper>
        {generateLabel}
        <FieldContainer>
          {generateIcon}
          {generateField}
        </FieldContainer>
      </Wrapper>
    )
  },
)
TextField.displayName = 'TextField'