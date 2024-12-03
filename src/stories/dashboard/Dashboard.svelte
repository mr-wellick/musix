<script>
  import Header from '../header/Header.svelte';
  import Sidebar from '../sidebar/Sidebar.svelte';
</script>

<Header data={{ user: { first_name: 'Bugs', last_name: 'Bunny' } }} onLogout={() => {}} />
<Sidebar />
