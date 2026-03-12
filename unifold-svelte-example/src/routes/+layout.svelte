<!--
  In a real app, you would place UnifoldProvider here in the layout
  and load your API key from the environment:

  <script lang="ts">
    import { UnifoldProvider } from "@unifold/connect-svelte";
    import { PUBLIC_UNIFOLD_KEY } from "$env/static/public";
  </script>

  <UnifoldProvider publishableKey={PUBLIC_UNIFOLD_KEY} config={{ appearance: "dark" }}>
    {@render children()}
  </UnifoldProvider>

  This demo lets you enter the key via an input field instead,
  so the provider lives in +page.svelte.
-->

<script lang="ts">
  import "@unifold/connect-svelte/styles-base.css";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();
</script>

{@render children()}
