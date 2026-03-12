<script lang="ts">
  import "@unifold/connect-svelte/styles-base.css";
  import { UnifoldProvider } from "@unifold/connect-svelte";
  import { PUBLIC_UNIFOLD_KEY } from "$env/static/public";

  interface Props {
    children: import("svelte").Snippet;
  }
  let { children }: Props = $props();
</script>

<UnifoldProvider publishableKey={PUBLIC_UNIFOLD_KEY} config={{ appearance: "dark" }}>
  {@render children()}
</UnifoldProvider>
