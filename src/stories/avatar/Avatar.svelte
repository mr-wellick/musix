<script lang="ts">
  const { user }: { user: { name: string } } = $props();
</script>

<div class="dropdown">
  <div tabindex="0" role="button" class="avatar placeholder">
    <div class="w-12 rounded-full bg-neutral text-neutral-content">
      <span>{user.name.at(0)}</span>
    </div>
  </div>
  <ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
    <li>
      <a class="justify-between" href="/account/profile">
        Profile
        <span class="badge">New</span>
      </a>
    </li>
    <li><a href="/account/settings">Settings</a></li>
    <li><a href="/login">Logout</a></li>
  </ul>
</div>
