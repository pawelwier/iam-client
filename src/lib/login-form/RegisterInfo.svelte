<script>
const onRegister = () => {

}
</script>

<div class="register-info">
  <div>
    New to Securosys Cloud Console?
  </div>
  <button 
    class="fake-link register-btn"
    on:click|preventDefault={onRegister}  
  >
    Create a new Securosys account
  </button>
</div>

<style>
.register-info {
  width: 100%;
  margin-top: 2rem;
  text-align: left;
}

.register-info * {
  font-size: 1rem;
}

.register-btn {
  background: none;
  border: none;
  padding: 0;
}
</style>