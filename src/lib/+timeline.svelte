<script lang="ts">
	//import dayjs from 'dayjs';

	const todos = [
		{
			title: 'Rhythm',
			tasks: [
				{
					name: 'Single Stroke Rolls',
					description: 'Practice single stroke rolls, subdivision: 16th notes',
					duration: '4m',
					bpm: '60'
				},
				{
					name: 'Pyramid',
					description: 'Practice single stroke rolls, subdivision: 16th notes',
					duration: '4m',
					bpm: '60'
				}
			]
		}
	];
	let dragged: EventTarget | null;
	const hours = Array.from({ length: 24 }, (_, index) => index);
</script>

<div
	class="flex relative w-full"
	role="list"
	on:dragover={(e) => {
		e.preventDefault();
		if (dragged) {
			console.log('drag over');
			dragged.style.left = '0px';
			dragged.style.top = e.clientY + 'px';
		}
	}}
	on:dragenter={(e) => {
		//console.log('drag enter');
	}}
	on:dragleave={(e) => {
		//console.log('drag leave');
	}}
	on:drop={(e) => {
		e.preventDefault();
		//console.log('drop', e.target.getBoundingClientRect());
		//e.target.appendChild(dragged);
	}}
>
	<ul>
		{#each hours as hour}
			<li class="h-10 w-12 text-center border-r text-gray-400 text-sm">{hour}</li>
			<!-- <div class="after:'' border-b border-gray-150 ml-10"></div> -->
		{/each}
	</ul>
	<p
		class="relative cursor-pointer w-full bg-musix-red border border-musix-red-border rounded h-min"
		draggable="true"
		on:drag={(e) => {
			//console.log('dragging');
		}}
		on:dragstart={(e) => {
			dragged = e.target;
		}}
		on:dragend={(e) => {
			//console.log('drag end');
		}}
	>
		drag me
	</p>
</div>
