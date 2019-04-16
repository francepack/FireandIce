export const getData = async () => {
  try {
    const url = 'http://localhost:3001/api/v1/houses'
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch(error) {
    return error.message
  }
}
