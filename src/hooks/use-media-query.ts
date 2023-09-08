import  { useEffect, useState } from 'react'
import { Device } from '../style/theme.types'
import { Theme } from '../style/theme'

type QueryType = 'max-width' | 'min-width'
export const useMediaQuery = (type: QueryType,device:keyof  Device) => {
  const [matches,setMatches] = useState<boolean>();
  useEffect(() => {
    const deviceWidth = Theme.device[device]
    const query = `(${type}: ${deviceWidth})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    media.onchange = function(){
      setMatches(this.matches)
    }
  }, [device,type])
  return {matches}
}

