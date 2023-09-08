import { useState } from 'react'

type Types = 'text' | 'password';
type UsePasswordToggle = [type: Types,passwordToggle: () => void]


export function usePasswordToggle(): UsePasswordToggle {
  const [type, setType] = useState<Types>('password')
  const passwordToggle = () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }
  return [
    type,
    passwordToggle]
}
