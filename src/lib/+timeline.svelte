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
</script>

<div class="grid grid-cols-2">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
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
		class="border border-dashed border-black h-96"
	>
		<p
			on:drag={(e) => {
				//console.log('dragging');
			}}
			on:dragstart={(e) => {
				dragged = e.target;
			}}
			on:dragend={(e) => {
				//console.log('drag end');
			}}
			draggable="true"
			class="absolute"
		>
			drag me
		</p>
	</div>
</div>
