export const defaultHeaders = new Headers()
defaultHeaders.set('Content-Type', 'application/json')

export const FetchMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

export const fetchData = async fetchParams => {
  const { 
    url,
    method = FetchMethod.GET,
    headers = defaultHeaders,
    body 
  } = fetchParams
  const res = await fetch(url, {
    method,
    headers,
    body
  })

  return await res.json()
}