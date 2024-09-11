import { writable } from 'svelte/store'

export const UserAction = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  LOGGED: 'Logged',
}

export const userActionStore = writable(UserAction.LOGIN)