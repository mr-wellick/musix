<script lang="ts">
  import Avatar from '../avatar/Avatar.svelte';
  import ProfileMenu from '../profile-menu/ProfileMenu.svelte';
  import AppMenu from '../app-menu/AppMenu.svelte';
  import type { Props } from '$lib/types/client.types';

  const { user, onLogout }: Props = $props();
</script>

<div class="navbar bg-base-100">
  <AppMenu />
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Musixx</a>
  </div>
  {#if user}
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <Avatar {user} />
        <ProfileMenu {onLogout} />
      </div>
    </div>
  {/if}
</div>
