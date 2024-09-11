import { FetchMethod, fetchData } from "./controllerUtils"

// TODO: move to .env
// TODO: code duplicated, match?
const API_URL = 'http://localhost:5050'

export const registerUser = async data => {
  const url = `${API_URL}/users`
  const { id, name, password } = data
  
  return await fetchData({
    url,
    method: FetchMethod.POST,
    body: JSON.stringify({
      id,
      name,
      password
    })
  })
}

export const loginUser = async data => {
  const url = `${API_URL}/login`
  const { id, name, password } = data
  
  return await fetchData({
    url,
    method: FetchMethod.POST,
    body: JSON.stringify({
      id,
      name,
      password
    })
  })
}
