<script>
import InfoPanel from './info-panel/InfoPanel.svelte'
import LoginForm from './login-form/LoginForm.svelte'

</script>

<div class="login-form-container">

  <LoginForm />
  <InfoPanel />
</div>

<style>
.login-form-container {
  display: grid;
  grid-template-columns: 27rem 30rem;
  gap: 6rem;
  padding-bottom: 2rem;
}
</style>