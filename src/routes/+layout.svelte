<script lang="ts">
  import '../app.css';
  import Header from '../stories/Header.svelte';
  let { children } = $props();
</script>

<Header />

{@render children()}
