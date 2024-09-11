<script>
import { UserAction, userActionStore } from '../../stores/actionStore'
import SysInfo from './SysInfo.svelte'
import UserBenefitInfo from './UserBenefitInfo.svelte'
import WelcomePage from './WelcomePage.svelte'

$: panelComponent = {
  [UserAction.LOGIN]: SysInfo,
  [UserAction.REGISTER]: UserBenefitInfo,
  [UserAction.LOGGED]: WelcomePage
}[$userActionStore]
</script>

<svelte:component this={panelComponent} />