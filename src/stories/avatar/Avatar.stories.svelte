<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Avatar from './Avatar.svelte';

  const { Story } = defineMeta({
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {},
  });
</script>

<Story name="Logged In" args={{ user: { first_name: 'Daffy', last_name: 'Duck' } }} />

<Story name="Logged Out" args={{}} />
