<script>
import { loginUser } from '../../controllers/locationController'
import FormError from './FormError.svelte';
import InputError from './InputError.svelte'

let id = '', name = '', password = '', error = null

const handleSubmit = async e => {
  error = null
  const formData = new FormData(e.target)
  const formDataEntries = formData.entries();
  const myData = Object.fromEntries(formDataEntries);

  const { data, status } = await loginUser({ ...myData })

  error = { data, status }
}
</script>

<form
  on:submit|preventDefault={handleSubmit}
>
  <div class="login-header">
    Log in to IAM
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
    >
      Log in ›
    </button>
  </div>
</form>

<style>
form {
  font-size: 1.4rem;
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
button[type="submit"] {
  color: #FFF;
  font-size: 1.1rem;
  padding: .8rem 3.2rem;
  margin-top: 1rem;
  background-color: var(--color-red);
  border: none;
  cursor: pointer;
}
button[type="submit"]:hover {
  opacity: .8;
}

label {
  font-size: .9rem;
  color: var(--color-grey-dark);
}

.login-header {
  text-align: center;
  font-size: 1.8rem;
  padding-bottom: 1rem;
}

.submit-container {
  display: flex;
  justify-content: end;
}
</style>