import { useContext } from 'react'
import { NavigationContext } from '../context'

export const useNavigationContext = () => {
  const context = useContext(NavigationContext)
  if(!context){
    throw new Error('Navigation context out of component')
  }
  return context
}

