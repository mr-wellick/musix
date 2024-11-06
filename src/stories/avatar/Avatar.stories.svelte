<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Avatar from './Avatar.svelte';

  const { Story } = defineMeta({
    title: 'Avatar',
    component: Avatar,
    tags: ['autodocs'],
    // argTypes: {},
    args: {
      user: { name: 'Daffy' },
    },
  });
</script>

<Story name="Primary" />
