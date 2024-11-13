<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ProfileMenu from './ProfileMenu.svelte';
  import { fn } from '@storybook/test';

  const { Story } = defineMeta({
    title: 'Components/Profile Button',
    component: ProfileMenu,
    tags: ['autodocs'],
    args: {
      onLogout: fn(),
    },
  });
</script>

<Story name="Primary" />
