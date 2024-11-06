<script lang="ts">
  const { user }: { user: { name: string } } = $props();
</script>

<div tabindex="0" role="button" class="avatar placeholder">
  <div class="w-12 rounded-full bg-neutral text-neutral-content">
    <span>{user.name.at(0)}</span>
  </div>
</div>
