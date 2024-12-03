<script lang="ts">
  import Avatar from '../avatar/Avatar.svelte';
  import ProfileMenu from '../profile-menu/ProfileMenu.svelte';
  import AppMenu from '../app-menu/AppMenu.svelte';

  interface Props {
    data: App.Locals['MUSIX_USER'];
    onLogout: () => void;
  }

  const { data, onLogout }: Props = $props();
</script>

<div class="navbar bg-base-100">
  <AppMenu />
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Musixx</a>
  </div>
  {#if data.user}
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <Avatar user={data.user} />
        <ProfileMenu {onLogout} />
      </div>
    </div>
  {/if}
</div>
