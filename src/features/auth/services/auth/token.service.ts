export function saveToken(accessToken: string) {
  const newCredentials = {
    accessToken,
  }
  const oldCredentials = getCredentials()
  if (oldCredentials === null) {
    setCredentials(JSON.stringify(newCredentials))
    return
  }
  try {
    const parsedCredentials = JSON.parse(oldCredentials)
    setCredentials(JSON.stringify({ ...parsedCredentials, ...newCredentials }))
  } catch (e) {
    setCredentials(JSON.stringify(newCredentials))
  }
}

export function getToken(): string | null {
  const credentials  = getCredentials();
  if(!credentials){
    return null;
  }
  try {
    const parsedCredentials = JSON.parse(credentials);
    return parsedCredentials.accessToken || null
  }catch (e){
    removeCredentials();
    return null;
  }
}
export function deleteToken() {
  const oldCredentials = getCredentials()
  if (oldCredentials === null) {
    return
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accessToken: _, ...parsedCredentials } = JSON.parse(oldCredentials)
    setCredentials(JSON.stringify(parsedCredentials))
  } catch (e) {
    removeCredentials()
    return
  }
}

// credentials

function getCredentials() {
  return localStorage.getItem('credentials')
}

function setCredentials(credentials: string) {
  localStorage.setItem('credentials', credentials)
}

export function removeCredentials() {
  localStorage.removeItem('credentials')
}