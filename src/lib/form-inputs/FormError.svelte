<script>
import { isFormError } from '../../helpers/httpHelpers'
import ErrorMsg from './ErrorMsg.svelte'

export let error

$: ({ data: { msg }, status } = error || { data: {} })
$: showErrorMsg = isFormError(status)
</script>


{#if showErrorMsg}
  <div class="form-error-msg">
    <ErrorMsg {msg} />
  </div>
{/if}

<style>
.form-error-msg {
  text-align: center;
  padding-top: 1rem;
}
</style>