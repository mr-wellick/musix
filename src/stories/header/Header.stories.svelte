<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';
  import { fn } from '@storybook/test';

  const { Story } = defineMeta({
    title: 'Composite/Header',
    component: Header,
    tags: ['autodocs'],
    args: {
      data: { user: null },
      onLogout: fn(),
    },
  });
</script>

<Story name="Logged in" args={{ data: { user: { first_name: 'Bugs', last_name: 'Bunny' } } }} />

<Story name="Logged out" />
