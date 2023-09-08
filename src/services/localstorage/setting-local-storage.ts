import { SettingValueMap } from './setting.types'
import { LOCAL_STORAGE_SETTINGS_KEY } from './setting-local-storage.constants'


export function saveItemToSetting<T extends keyof SettingValueMap>(itemName: T, itemValue: SettingValueMap[T]) {
  const strSetting = getSetting()
  if (!strSetting) {
    setSetting(JSON.stringify({ [itemName]: itemValue }))
    return
  }
  try {
    const setting = JSON.parse(strSetting)
    setting[itemName] = itemValue
    setSetting(JSON.stringify(setting))
  } catch (e) {
    removeSetting()
    return null
  }
}

export function getSettingItem<T extends keyof SettingValueMap>(itemName: T): SettingValueMap[T] | null {
  const strSetting = getSetting()
  if (!strSetting) {
    return null
  }
  try {
    const setting = JSON.parse(strSetting)
    return setting[itemName] || null
  } catch (e) {
    removeSetting()
    return null
  }
}


function getSetting() {
  return localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY)
}

function setSetting(credentials: string) {
  localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, credentials)
}

function removeSetting() {
  localStorage.removeItem(LOCAL_STORAGE_SETTINGS_KEY)
}