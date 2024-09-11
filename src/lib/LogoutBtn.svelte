<script>
import { logout } from '../storage/userStorage'

export let userId

const onLogout = () => {
  logout()
  userId = null
}
</script>

<button
  on:click|preventDefault={onLogout}
  class="btn-main"
>
  Log out
</button>