<script>
import InputError from './InputError.svelte'

export let value
export let error
</script>

<label class="form-label">
  Account ID or account alias
  <input
    class="form-input"
    type="text"
    name="id"
    {value}
  />
</label>
<InputError {error} elementId="id" />