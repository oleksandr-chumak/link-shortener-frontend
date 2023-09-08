import React, { useEffect, useRef } from 'react'
import { Checkbox } from '../../UI'
import { ClipboardCheckboxHeader, ClipboardCheckboxWrapper } from './clipboard-checkbox.styled'
import { getSettingItem, saveItemToSetting, Setting } from '../../../../services'
import { useFieldContext } from '../../../../features'

const autoPasteSetting = getSettingItem(Setting.AUTO_PASTE)
export const ClipboardCheckbox = () => {
  const innerChecked = useRef<boolean>(!!autoPasteSetting);
  const { sendClipboardReadPermissionRequest, permission, setClipboardListener } = useFieldContext()

  const handleClick = async (isActive: boolean, click: () => void) => {
    const newActive = !isActive
    if (permission === 'granted') {
      saveItemToSetting(Setting.AUTO_PASTE, newActive)
      innerChecked.current = newActive
      await setClipboardListener()
      click()
      return
    }else{
      await sendClipboardReadPermissionRequest()
    }
  }
  useEffect(() => {
    if (permission === 'denied'){
      saveItemToSetting(Setting.AUTO_PASTE, false)
      innerChecked.current = false;
    }else if (permission === 'granted' && innerChecked.current){
      setClipboardListener()
    }
  }, [permission])
  return (
    <ClipboardCheckboxWrapper>
      <Checkbox
        onClick={handleClick}
        initialState={autoPasteSetting !== null && autoPasteSetting}
        checked={permission === 'denied' ? false : undefined}
      />
      <ClipboardCheckboxHeader>Auto Paste from Clipboard</ClipboardCheckboxHeader>
    </ClipboardCheckboxWrapper>
  )
}

