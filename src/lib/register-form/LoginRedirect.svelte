<script>
import { UserAction, userActionStore } from '../../storage/actionStore'

export let text 

const onBackToLogin = () => {
  userActionStore.set(UserAction.LOGIN)
}
</script>

<div class="form-footer-info">
  <div>
    {text}
  </div>
  <button 
    class="fake-link form-footer-btn"
    style="padding-left: 0"
    on:click|preventDefault={onBackToLogin}  
  >
    Go to login
  </button>
</div>