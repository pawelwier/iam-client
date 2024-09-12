<script>
import { registerUser } from '../../controllers/userController'
import { isStatusOk } from '../../helpers/httpHelpers'
import FormError from '../form-inputs/FormError.svelte'
import IdInput from '../form-inputs/IdInput.svelte'
import NameInput from '../form-inputs/NameInput.svelte'
import PasswordInput from '../form-inputs/PasswordInput.svelte'
import LoginRedirect from './LoginRedirect.svelte'
import RegisterBtn from './RegisterBtn.svelte'

let id = '', name = '', password = '', confirmPassword = '', error = null, success = false

const handleRegister = async e => {
  const formData = new FormData(e.target)
  const formDataEntries = formData.entries()
  const myData = Object.fromEntries(formDataEntries)

  const { data, status } = await registerUser({ ...myData })

  if (isStatusOk(status)) {
    success = true
  } else {
    error = { data, status }
  }
}
</script>

{#if success}
  <div class="success-msg">
    <LoginRedirect text='Congratulations! You have created an account' />
  </div>
{:else}
  <form
    on:submit|preventDefault={handleRegister}
  >
    <div class="form-header">
      Create your IAM account
    </div>

    <IdInput value={id} {error} />
      
    <NameInput value={name} {error} />

    <PasswordInput value={password} {error} />

    <PasswordInput value={confirmPassword} {error} label='Confirm password' name="confirmPassword" />

    <FormError {error} /> 

    <RegisterBtn />

    <LoginRedirect text='Already got a Securosys Cloud Console account?' />
  </form>
{/if}

<style>
.success-msg {
  margin-top: 3rem;
}
</style>