import { SetStateAction, useRef, useState } from 'react'

// delay in ms
export const useDelayedState = <T = unknown>(initValue: T, delay = 100): [T, (newState: SetStateAction<T>) => void] => {
  const [state, setState] = useState<T>(initValue)
  const isBlockedRef = useRef<boolean>(false)

  const setDelayedState = (newState: SetStateAction<T>) => {
    if (isBlockedRef.current) {
      return
    }

    isBlockedRef.current = true

    setState(newState)
    setTimeout(() => {
      isBlockedRef.current = false
    }, delay)
  }

  return [state, setDelayedState]
}
