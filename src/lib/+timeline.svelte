<script lang="ts">
  // todo 1: fix dragging issue: when we drag table to top of page, the table does not reach the top of its container (there is a gap)
  // todo 2: UI, figure out how to display grid lines.
  let todos = [
    {
      category: 'Rhythm',
      name: 'Single Stroke Rolls',
      description: 'Practice single stroke rolls, subdivision: 16th notes',
      duration: '4m',
      bpm: '60',
    },
  ];
  let dragged = $state<HTMLDivElement>();
  const hours = Array.from({ length: 24 }, (_, index) => index);
</script>

<div
  class="relative flex w-full"
  role="button"
  tabindex="0"
  ondragover={(e) => {
    e.preventDefault();
    if (dragged) {
      console.log('drag over');
      dragged.style.left = '0px';
      dragged.style.top = e.clientY + 'px';
    }
  }}
  ondragenter={() => {
    //console.log('drag enter');
  }}
  ondragleave={() => {
    //console.log('drag leave');
  }}
  ondrop={(e) => {
    e.preventDefault();
    //console.log('drop', e.target.getBoundingClientRect());
    //e.target.appendChild(dragged);
  }}
>
  <ul>
    {#each hours as hour}
      <li class="h-10 w-12 border-r text-center text-sm text-gray-400">{hour}</li>
      <!-- <div class="after:'' border-b border-gray-150 ml-10"></div> -->
    {/each}
  </ul>
  {#each todos as todo}
    <table
      class="border-musix-red-border table h-min cursor-pointer rounded border"
      role="contentinfo"
      draggable="true"
      ondrag={() => {
        //console.log('dragging');
      }}
      ondragstart={(e) => {
        if (e.target) dragged = e.target as HTMLDivElement;
      }}
      ondragend={() => {
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
