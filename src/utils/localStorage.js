export const getItem = (key) => {
  let result = localStorage.getItem(key)

  if (result) {
    return JSON.parse(result)
  } else {
    return false
  }
}

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const isKey = (key) => {
  return localStorage.getItem(key) !== null
}
