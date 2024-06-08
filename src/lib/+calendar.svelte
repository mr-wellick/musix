<script lang="ts">
	import dayjs from 'dayjs';

	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let date = dayjs().format('YYYY-MM-DD');
	$: dayOfWeek = days[dayjs(date).day()];
	$: dayOfMonth = dayjs(date).date();
</script>

<div class="flex flex-col items-center py-3">
	<p>{dayOfWeek}</p>
	<p class="text-9xl">{dayOfMonth}</p>
	<label for="date-picker">
		<input bind:value={date} type="date" id="date-picker" />
	</label>
</div>
