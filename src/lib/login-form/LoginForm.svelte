<script>
import { loginUser } from '../../controllers/userController'
import { isStatusOk } from '../../helpers/httpHelpers'
import { setUserId } from '../../storage/userStorage'
import FormError from './FormError.svelte';
import InputError from './InputError.svelte'
import RegisterInfo from './RegisterInfo.svelte'

export let userId

let id = '', name = '', password = '', error = null

const handleSubmit = async e => {
  error = null
  const formData = new FormData(e.target)
  const formDataEntries = formData.entries()
  const myData = Object.fromEntries(formDataEntries)

  const { data, status } = await loginUser({ ...myData })

  // TODO: refactor
  if (isStatusOk(status)) {
    const { id } = data
    setUserId(id)
    userId = id
  } else {
    error = { data, status }
  }
}
</script>

<form
  on:submit|preventDefault={handleSubmit}
>
  <div class="login-header">
    Log in as IAM user
  </div>
  
  <label>
    Account ID or account alias
    <input
      type="text"
      name="id"
      value={id}
    />
  </label>
  <InputError {error} elementId="id" />

  <label>
    IAM user name
    <input
      type="text"
      name="name"
      value={name}
    />
  </label>
  <InputError {error} elementId="name" />

  <label>
    Password
    <input
      type="password"
      name="password"
      value={password}
    />
  </label>
  <InputError {error} elementId="password" />

  <FormError {error} /> 

  <div class="submit-container">
    <button
      type="submit"
      class="btn-main"
    >
      Log in ›
    </button>
  </div>

  <RegisterInfo />
</form>

<style>
form {
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
}

input[type="text"], input[type="password"] {
  display: block;
  width: 25rem;
  padding: .8rem;
  outline: 0;
  font-size: 1.1rem;
  border: 1px var(--color-grey-dark) solid;
}

input[type="text"]:focus, input[type="password"]:focus {
  border: 1px var(--color-red) solid;
}

label {
  display: block;
  margin-top: 1.8rem;
  font-size: .9rem;
  color: var(--color-grey-dark);
}

.login-header {
  width: 100%;
  font-size: 1.8rem;
  text-align: left;
}

.submit-container {
  display: flex;
  justify-content: end;
}
</style>