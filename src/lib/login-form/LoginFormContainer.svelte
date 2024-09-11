<script>
import LoginForm from './LoginForm.svelte'
import SysInfo from './SysInfo.svelte'


</script>

<div class="login-form-container">

  <LoginForm />
  <SysInfo />
</div>

<style>
.login-form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>