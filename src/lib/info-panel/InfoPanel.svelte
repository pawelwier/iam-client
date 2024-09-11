<script>
import { UserAction, userActionStore } from '../../storage/actionStore'
import SysInfo from './SysInfo.svelte'
import UserBenefitInfo from './UserBenefitInfo.svelte'
import WelcomePage from './WelcomePage.svelte'

export let userId

$: panelComponent = {
  [UserAction.LOGIN]: SysInfo,
  [UserAction.REGISTER]: UserBenefitInfo,
}[$userActionStore]
</script>

{#if userId}
  <WelcomePage />
{:else}
  <svelte:component this={panelComponent} />
{/if}