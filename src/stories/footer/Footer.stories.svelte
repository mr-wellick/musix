<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Footer from './Footer.svelte';

  const { Story } = defineMeta({
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    args: {},
  });
</script>

<Story name="Primary" />
