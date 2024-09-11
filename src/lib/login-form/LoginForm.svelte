<script>
import { createEventDispatcher } from 'svelte'

let id = '', name = '', password = ''

const dispatch = createEventDispatcher()

const handleSubmit = e => {
  const formData = new FormData(e.target)
  const formDataEntries = formData.entries();
  const myData = Object.fromEntries(formDataEntries);

  console.log(myData)
}
</script>

<form
  on:submit|preventDefault={handleSubmit}
>
  <input
    type="text"
    name="id"
    value={id}
  />

  <input
    type="text"
    name="name"
    value={name}
  />

  <input
    type="password"
    name="password"
    value={password}
  />

  <button
    type="submit"
  >
    Login
  </button>
</form>