export const setUserId = id => localStorage.setItem('iam-user-id', id)

export const getUserId = () => localStorage.getItem('iam-user-id')

export const logout = () => localStorage.removeItem('iam-user-id')