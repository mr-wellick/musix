<script lang="ts">
	import Timeline from '$lib/+timeline.svelte';
	import { getContext } from 'svelte';

	// Retrieve user store from context
	const tasks = getContext('tasks');
</script>

<Timeline />

{#each $tasks as task}
	{JSON.stringify(task)}
{/each}
