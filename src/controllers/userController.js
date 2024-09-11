import { FetchMethod, fetchData } from "./controllerUtils"

// TODO: move to .env
// TODO: code duplicated?
const API_URL = 'http://localhost:5050'

export const getUserById = async id => {
  const url = `${API_URL}/users?id=${id}`
  
  return await fetchData({
    url,
    method: FetchMethod.GET,
  })
}

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
  const url = `${API_URL}/users/login`
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
