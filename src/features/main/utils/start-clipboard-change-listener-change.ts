async function getClipboard() {
  try {
    const clipboard = await navigator.clipboard.readText()
    return clipboard
  } catch (e) {
    return null
  }
}

export async function startClipboardChangeListener(listener: (clipboard?: string | null) => void, ms = 1000): Promise<NodeJS.Timeout> {
  let previousClipboard = await getClipboard()
  if (previousClipboard !== null){
    listener(previousClipboard)
  }

  const intervalId = setInterval(async () => {
    const currentClipboard = await getClipboard()
    if (previousClipboard !== currentClipboard && currentClipboard !== null) {
      previousClipboard = currentClipboard
      listener(currentClipboard)
    }
  }, ms)

  return intervalId
}