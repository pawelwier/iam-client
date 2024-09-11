/*
  Api returns status 401 or 404 if particular input has invalid value
  If error relates to the whole form, return 400 (or 503)
*/

export const isInputError = status => [401, 404].includes(status)
export const isFormError = status => [400, 503].includes(status)