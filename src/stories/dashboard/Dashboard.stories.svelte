<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Dashboard from './Dashboard.svelte';

  const { Story } = defineMeta({
    title: 'View/Dashboard',
    component: Dashboard,
    tags: ['autodocs'],
    args: {},
  });
</script>

<Story name="Logged in" />
