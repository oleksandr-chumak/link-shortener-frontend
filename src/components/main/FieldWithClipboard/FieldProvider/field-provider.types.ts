import React, { Dispatch, SetStateAction } from 'react'

export type FieldProviderProps = {
  children: React.ReactNode
}

export type IntervalId = NodeJS.Timer | undefined

export interface FieldContextInitialValues {
  sendClipboardReadPermissionRequest: () => Promise<void>,
  setClipboardListener: () => Promise<void>,
  permission: PermissionState | undefined,
  fieldRef: React.RefObject<HTMLInputElement>
}