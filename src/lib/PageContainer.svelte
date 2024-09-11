<script>
import { getUserId } from '../storage/userStorage'
import InfoPanel from './info-panel/InfoPanel.svelte'
import LoginForm from './login-form/LoginForm.svelte'
import UserDashboard from './UserDashboard.svelte'

let userId

userId = getUserId()
$: isLoggedIn = !!userId
</script>

<div class="login-form-container">
  {#if isLoggedIn}
    <UserDashboard bind:userId />
  {:else}
    <LoginForm bind:userId />
  {/if}
  <InfoPanel {userId} />
</div>

<style>
.login-form-container {
  display: grid;
  grid-template-columns: 26.75rem 30rem;
  gap: 6rem;
  padding-bottom: 2rem;
}
</style>