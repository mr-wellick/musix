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
	class="flex"
	role="list"
	on:dragover={(e) => {
		e.preventDefault();
		if (dragged) {
			console.log('drag over');
			dragged.style.left = e.clientX + 'px';
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
	<ul class="w-full">
		{#each hours as hour}
			<li class="h-10 w-12 text-center border-r">{hour}</li>
			<div class="after:'' border-b border-gray-150 ml-10"></div>
		{/each}
	</ul>
	<p
		class="absolute border border-black cursor-pointer"
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
