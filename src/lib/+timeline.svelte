<script lang="ts">
	//import dayjs from 'dayjs';

	let todos = [
		{
			category: 'Rhythm',
			name: 'Single Stroke Rolls',
			description: 'Practice single stroke rolls, subdivision: 16th notes',
			duration: '4m',
			bpm: '60'
		}
		// {
		// 	category: 'Rhythm',
		// 	name: 'Pyramid',
		// 	description: 'Practice single stroke rolls, subdivision: 16th notes',
		// 	duration: '4m',
		// 	bpm: '60'
		// },
		// {
		// 	category: 'Scales',
		// 	name: 'Scale in 3rds #1',
		// 	description:
		// 		'Practice scale in 3rds ascending/descending around the circle of fifths. Use scale pattern #1 (one position, no shifting)',
		// 	duration: '10m',
		// 	bpm: '80'
		// }
	];
	let dragged: EventTarget | null;
	const hours = Array.from({ length: 24 }, (_, index) => index);
</script>

<div
	class="flex relative w-full"
	role="table"
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
	on:click={(e) => {
		console.log('add new item: ', {
			category: 'Scales',
			name: 'Scale in 3rds #1',
			description:
				'Practice scale in 3rds ascending/descending around the circle of fifths. Use scale pattern #1 (one position, no shifting)',
			duration: '10m',
			bpm: '80'
		});
		todos = [
			...todos,
			{
				category: 'Scales',
				name: 'Scale in 3rds #1',
				description:
					'Practice scale in 3rds ascending/descending around the circle of fifths. Use scale pattern #1 (one position, no shifting)',
				duration: '10m',
				bpm: '80'
			}
		];
	}}
>
	<ul>
		{#each hours as hour}
			<li class="h-10 w-12 text-center border-r text-gray-400 text-sm">{hour}</li>
			<!-- <div class="after:'' border-b border-gray-150 ml-10"></div> -->
		{/each}
	</ul>
	{#each todos as todo}
		<table
			class="absolute table cursor-pointer border border-musix-red-border rounded h-min"
			role="contentinfo"
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
			<!-- head -->
			<thead>
				<tr>
					<th>Practice Priority</th>
					<th>Metronome Marking</th>
					<th>Time Spent</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr>
					<td>
						<h1>{todo.category}</h1>
						<p>{todo.name}</p>
						<p>{todo.description}</p>
					</td>
					<td>{todo.bpm}</td>
					<td>{todo.duration}</td>
				</tr>
			</tbody>
		</table>
	{/each}
</div>
