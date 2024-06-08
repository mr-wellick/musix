<script lang="ts">
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
</script>

{#each todos as todo}
	<p>{todo.title}</p>
	{#each todo.tasks as task}
		<p>{task.name}</p>
		<ul>
			<li>
				<p>{task.description}</p>
			</li>
		</ul>
	{/each}
{/each}
