<script lang="ts">
  import Header from '../stories/header/Header.svelte';
  import { userStore } from '$lib/userStore.svelte';
  import '../app.css';
  import Sidebar from '../stories/sidebar/Sidebar.svelte';
  import Footer from '../stories/footer/Footer.svelte';

  let { children } = $props();

  const onLogout = () => {
    userStore.user = null;
  };
</script>

<Header {onLogout} data={userStore} />

<div class="flex">
  <Sidebar />
  {@render children()}
</div>

<Footer />
