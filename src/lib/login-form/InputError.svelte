<script>
import { isInputError } from '../../helpers/httpHelpers'
import ErrorMsg from './ErrorMsg.svelte'

export let error
export let elementId

$: ({ data: { id, msg }, status } = error || { data: {} })
$: showErrorMsg = (id === elementId) && isInputError(status)
</script>


{#if showErrorMsg}
  <ErrorMsg {msg} />
{/if}
