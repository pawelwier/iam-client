<script>
import { UserAction, userActionStore } from '../../storage/actionStore'

const onRegister = () => {
  userActionStore.set(UserAction.REGISTER)
}
</script>

<div class="form-footer-info">
  <div>
    New to Securosys Cloud Console?
  </div>
  <button 
    class="fake-link form-footer-btn"
    style="padding-left: 0"
    on:click|preventDefault={onRegister}  
  >
    Create a new Securosys account
  </button>
</div>