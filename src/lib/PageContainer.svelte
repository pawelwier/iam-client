<script>
// @ts-nocheck
import { UserAction, userActionStore } from '../storage/actionStore'
import { getUserId } from '../storage/userStorage'
import InfoPanel from './info-panel/InfoPanel.svelte'
import LoginForm from './login-form/LoginForm.svelte'
import RegisterForm from './register-form/RegisterForm.svelte'
import UserDashboard from './UserDashboard.svelte'

let userId

userId = getUserId()
$: isLoggedIn = !!userId

$: formComponent = {
  [UserAction.LOGIN]: LoginForm,
  [UserAction.REGISTER]: RegisterForm,
}[$userActionStore]
</script>

<div class="login-form-container">
  {#if isLoggedIn}
    <UserDashboard bind:userId />
  {:else}
    <svelte:component this={formComponent} bind:userId />
  {/if}
  <InfoPanel {userId} />
</div>