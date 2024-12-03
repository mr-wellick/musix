<script lang="ts">
  import Avatar from '../avatar/Avatar.svelte';
  import ProfileMenu from '../profile-menu/ProfileMenu.svelte';
  import AppMenu from '../app-menu/AppMenu.svelte';
  import type { Props } from '$lib/types/client.types';

  const { data, onLogout }: Props = $props();
</script>

<div class="navbar bg-base-100">
  <AppMenu />
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Musixx</a>
  </div>
  {#if data}
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <Avatar {data} />
        <ProfileMenu {onLogout} />
      </div>
    </div>
  {/if}
</div>
