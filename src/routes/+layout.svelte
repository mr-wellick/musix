<script lang="ts">
  import Header from '../stories/header/Header.svelte';
  import { userStore } from '$lib/userStore.svelte';
  import '../app.css';

  let { children } = $props();

  const onLogout = () => {
    $userStore = null;
  };
</script>

<Header {onLogout} user={$userStore} />

{@render children()}
