<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Sidebar from './Sidebar.svelte';

  const { Story } = defineMeta({
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    args: {},
  });
</script>

<Story name="Opened" />
