<script>
import { onMount } from 'svelte'
import { getUserById } from '../controllers/userController'
import LogoutBtn from './LogoutBtn.svelte'

export let userId

let user

const displayDate = date => new Date(date)?.toLocaleString()

onMount(async () => {
  const userRes = await getUserById(userId)
  user = userRes?.data
  userId = user?.id
})
</script>

{#if user}
{@const { id, name, createdAt } = user}
  <!-- TODO: refactor :) -->
  <div>
    <div>id: <b>{id}</b></div>
    <div>name: <b>{name}</b></div>
    <div>created at: <b>{displayDate(createdAt)}</b></div>

    <LogoutBtn bind:userId />
  </div>
{/if}