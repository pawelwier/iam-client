<script>
import InputError from './InputError.svelte'

export let value
export let error
export let name = 'password'
export let label = 'Password'
</script>
  
<label class="form-label">
  {label}
  <input
    class="form-input"
    type="password"
    {name}
    {value}
  />
</label>
<InputError {error} elementId={name} />