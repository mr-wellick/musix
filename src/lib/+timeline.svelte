<script lang="ts">
  // todo 1: fix dragging issue: when we drag table to top of page, the table does not reach the top of its container (there is a gap)
  // todo 2: UI, figure out how to display grid lines.
  let todos = [
    {
      category: "Rhythm",
      name: "Single Stroke Rolls",
      description: "Practice single stroke rolls, subdivision: 16th notes",
      duration: "4m",
      bpm: "60",
    },
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
  let dragged: HTMLDivElement;
  const hours = Array.from({ length: 24 }, (_, index) => index);
</script>

<div
  class="flex relative w-full"
  role="button"
  tabindex="0"
  on:dragover={(e) => {
    e.preventDefault();
    if (dragged) {
      console.log("drag over");
      dragged.style.left = "0px";
      dragged.style.top = e.clientY + "px";
    }
  }}
  on:dragenter={() => {
    //console.log('drag enter');
  }}
  on:dragleave={() => {
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
  {#each todos as todo}
    <table
      class="table cursor-pointer border border-musix-red-border rounded h-min"
      role="contentinfo"
      draggable="true"
      on:drag={() => {
        //console.log('dragging');
      }}
      on:dragstart={(e) => {
        if (e.target) dragged = e.target as HTMLDivElement;
      }}
      on:dragend={() => {
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
