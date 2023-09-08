import React, { memo } from 'react'
import { Exception } from './error.styled'

interface ErrorProps {
  message?: string,
  component?: typeof Exception,
}

export const Error = memo((
  { component = Exception, message }: ErrorProps,
) => {
  const renderError = () => {
    const ErrorComponent = component
    return <ErrorComponent>{message}</ErrorComponent>
  }
  return (
    <>{renderError()}</>
  )
})
Error.displayName = 'Error'

