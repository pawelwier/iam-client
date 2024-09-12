<script>
import { loginUser } from '../../controllers/userController'
import { isStatusOk } from '../../helpers/httpHelpers'
import { setUserId } from '../../storage/userStorage'
import IdInput from '../form-inputs/IdInput.svelte'
import NameInput from '../form-inputs/NameInput.svelte'
import PasswordInput from '../form-inputs/PasswordInput.svelte'
import FormError from '../form-inputs/FormError.svelte'
import LoginBtn from './LoginBtn.svelte'
import RegisterInfo from './RegisterInfo.svelte'

export let userId

let id = '', name = '', password = '', error = null

const handleLogin = async e => {
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
  on:submit|preventDefault={handleLogin}
>
  <div class="form-header">
    Log in as IAM user
  </div>
  
  <IdInput value={id} {error} />
  
  <NameInput value={name} {error} />

  <PasswordInput value={password} {error} />

  <FormError {error} /> 

  <LoginBtn />

  <RegisterInfo />
</form>