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
	let dragged;
</script>

<div class="grid grid-cols-2">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:dragover={(e) => {
			e.preventDefault();
			//console.log('drag over');
			console.log(e.clientX, e.clientY);
			dragged.style.left = e.clientY + 'px';
			dragged.style.top = e.clientX + 'px';
		}}
		on:dragenter={(e) => {
			//console.log('drag enter');
		}}
		on:dragleave={(e) => console.log('drag leave')}
		on:drop={(e) => {
			e.preventDefault();
			//console.log('drop', e.target.getBoundingClientRect());
			//e.target.appendChild(dragged);
		}}
		class="border border-dashed border-black h-96 relative"
	>
		<p
			on:drag={(e) => {
				console.log('dragging');
				//console.log(dragged.getBoundingClientRect());
			}}
			on:dragstart={(e) => {
				dragged = e.target;
			}}
			on:dragend={(e) => {
				console.log('drag end');
			}}
			draggable="true"
			class="absolute"
		>
			drag me
		</p>
	</div>
</div>
