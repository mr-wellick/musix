<script lang="ts">
  import type { Props } from '$lib/types/client.types';

  const { user }: Omit<Props, 'onLogout'> = $props();
</script>

<div tabindex="0" role="button" class="avatar placeholder">
  <div class="w-12 rounded-full bg-neutral text-neutral-content">
    <span>{user?.first_name.at(0)}</span>
  </div>
</div>
