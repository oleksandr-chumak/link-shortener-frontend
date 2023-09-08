import React, { createContext, FC, useEffect, useRef } from 'react'
import { FieldContextInitialValues, FieldProviderProps } from './field-provider.types'
import { usePermission, startClipboardChangeListener,isURL } from '../../../../features'

export const FieldContext = createContext<FieldContextInitialValues | null>(null)


export const FieldProvider: FC<FieldProviderProps> = ({ children }) => {
  const fieldRef = useRef<HTMLInputElement>(null)
  const intervalId = useRef<NodeJS.Timeout>()
  const { permission, sendClipboardReadPermissionRequest } = usePermission()

  useEffect(() => {
    permission === 'denied' && clearClipboardListener()
    return (() => {
      clearClipboardListener()
    })
  }, [permission])

  async function setClipboardListener() {
    if (intervalId.current) {
      clearClipboardListener()
      return
    }
    intervalId.current = await startClipboardChangeListener((clipboard) => {
      if (!clipboard || !fieldRef.current) {
        return
      }
      const isNewUrl = isURL(clipboard) && clipboard !== fieldRef.current.value
      if (isNewUrl) {
        fieldRef.current.value = clipboard
      }
    }, 500)
  }

  function clearClipboardListener() {
    if (!intervalId.current) {
      return
    }
    clearInterval(intervalId.current)
    intervalId.current = undefined
  }

  return (
    <FieldContext.Provider value={{
      sendClipboardReadPermissionRequest,
      setClipboardListener,
      permission,
      fieldRef,
    }}>
      {children}
    </FieldContext.Provider>
  )
}