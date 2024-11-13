<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AppMenu from './AppMenu.svelte';

  const { Story } = defineMeta({
    title: 'Components/Menu',
    component: AppMenu,
    tags: ['autodocs'],
    args: {},
  });
</script>

<Story name="Primary" />
