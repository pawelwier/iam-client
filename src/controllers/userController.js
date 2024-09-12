import { FetchMethod, fetchData } from "./controllerUtils"

const { VITE_API_URL } = import.meta.env

export const getUserById = async id => {
  const url = `${VITE_API_URL}/users?id=${id}`
  
  return await fetchData({
    url,
    method: FetchMethod.GET,
  })
}

export const registerUser = async data => {
  const url = `${VITE_API_URL}/users`
  const { id, name, password, confirmPassword } = data
  
  return await fetchData({
    url,
    method: FetchMethod.POST,
    body: JSON.stringify({
      id,
      name,
      password,
      confirmPassword
    })
  })
}

export const loginUser = async data => {
  const url = `${VITE_API_URL}/users/login`
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
