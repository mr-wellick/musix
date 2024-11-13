<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';
  import { fn } from '@storybook/test';

  const { Story } = defineMeta({
    title: 'Composite/Header',
    component: Header,
    tags: ['autodocs'],
    args: {
      user: null,
      onLogout: fn(),
    },
  });
</script>

<Story name="Logged in" args={{ user: { first_name: 'Daffy', last_name: 'Duck' } }} />

<Story name="Logged out" />
