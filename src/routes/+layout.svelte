<script>
	import Calendar from '$lib/+calendar.svelte';
	import '../app.css';
</script>

<div class="grid grid-cols-12">
	<div class="col-span-2 justify-items-center">
		<h1 class="p-2 text-center">Musix</h1>
		<Calendar />
	</div>

	<div class="col-span-9">
		<slot></slot>
	</div>

	<div class="col-span-1">Menu</div>
</div>
