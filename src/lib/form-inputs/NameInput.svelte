<script>
import InputError from './InputError.svelte'

export let value
export let error
</script>
  
<label class="form-label">
  IAM user name
  <input
    class="form-input"
    type="text"
    name="name"
    {value}
  />
</label>
<InputError {error} elementId="name" />