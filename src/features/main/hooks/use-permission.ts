import { useEffect, useMemo, useState } from 'react'
import { BROWSER, BROWSER_ENUM } from '../utils/detect-browser'

interface UsePermission {
  permission: PermissionState | undefined;
  sendClipboardReadPermissionRequest: () => Promise<void>;
}

export const usePermission = (): UsePermission => {
  const [permission, setPermission] = useState<PermissionState | undefined>()
  const isPermissionApiSupported = useMemo(checkIsPermissionApiSupported,[])

  useEffect(() => {
    checkPermission()
    setPermissionOnChange(function() {
      setPermission(this.state)
    })
  }, [])
  function checkIsPermissionApiSupported(){
    if ([BROWSER_ENUM.SAFARI,BROWSER_ENUM.FIRE_FOX].includes(BROWSER)) {
      console.error('Permission API is not supported')
      return false
    }
    return true
  }
  function checkPermission() {
    if (!isPermissionApiSupported) {
      return;
    }

    navigator.permissions
      .query({ name: ('clipboard-read') as PermissionName })
      .then((permissionStatus) => {
        setPermission(permissionStatus.state)
      })
      .catch((err) => {
        console.error(err)
        setPermission('denied')
      })
  }

  async function sendClipboardReadPermissionRequest() {
    if (!isPermissionApiSupported) {
      return;
    }

    try {
      await navigator.clipboard.readText()
      setPermission('granted')
    } catch (e) {
      console.error(e)
      setPermission('denied')
    }
  }

  function setPermissionOnChange(onChange: ((this: PermissionStatus, ev: Event) => void) | null) {
    if (!isPermissionApiSupported) {
      return;
    }

    navigator.permissions.query({ name: ('clipboard-read') as PermissionName })
      .then((permissionStatus) => {
        permissionStatus.onchange = onChange
      })
  }

  return {
    permission,
    sendClipboardReadPermissionRequest,
  }

}


