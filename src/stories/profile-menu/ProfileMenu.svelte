<script lang="ts">
  interface Props {
    onLogout: () => void;
  }

  const { onLogout }: Props = $props();
</script>

<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
  <li>
    <a class="justify-between" href="/account/profile">Profile</a>
  </li>
  <li><a href="/account/settings">Settings</a></li>
  <li><a href="/login" onclick={onLogout}>Logout</a></li>
</ul>
