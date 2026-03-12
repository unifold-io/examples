<script lang="ts">
  import DepositForm from "./DepositForm.svelte";
</script>

<svelte:head>
  <title>Unifold Svelte Example</title>
</svelte:head>

<main>
  <div class="hero">
    <div class="badge">SvelteKit + @unifold/connect-svelte</div>
    <h1>Deposit Demo</h1>
    <p>A standalone SvelteKit app using the Unifold Svelte SDK.</p>

    <div class="form">
      <DepositForm />
    </div>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0f0f0f;
    font-family: sans-serif;
    color: #fff;
  }

  .hero {
    max-width: 480px;
    width: 100%;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #1a1a2e;
    border: 1px solid #333;
    border-radius: 999px;
    font-size: 0.75rem;
    color: #888;
    letter-spacing: 0.05em;
  }

  h1 { font-size: 2.5rem; font-weight: 700; margin: 0; }
  p { color: #888; line-height: 1.6; margin: 0; }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: left;
  }

  .form :global(label) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .form :global(span) {
    font-size: 0.75rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form :global(input),
  .form :global(select) {
    padding: 0.625rem 0.75rem;
    background: #1a1a2e;
    border: 1px solid #333;
    border-radius: 0.375rem;
    color: #fff;
    font-size: 0.875rem;
    font-family: monospace;
    outline: none;
    transition: border-color 0.15s;
  }

  .form :global(input:focus),
  .form :global(select:focus) {
    border-color: #4f6ef7;
  }

  .form :global(select) {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23888' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2rem;
  }

  :global(.deposit-btn) {
    margin-top: 0.5rem;
    padding: 0.875rem 2rem;
    background: #4f6ef7;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
    width: 100%;
    max-width: 240px;
    align-self: center;
  }

  :global(.deposit-btn:hover:not(:disabled)) { background: #3b57e6; }
  :global(.deposit-btn:disabled) { opacity: 0.6; cursor: not-allowed; }

  :global(.feedback) {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
  }

  :global(.feedback.error) { background: #2a0f0f; border: 1px solid #4a1a1a; color: #f87171; }
  :global(.feedback.success) { background: #0f2a1a; border: 1px solid #1a4a2e; color: #4ade80; }
  :global(.feedback p) { color: inherit; opacity: 0.8; margin-top: 0.25rem; }
  :global(.feedback code) { display: block; margin-top: 0.5rem; font-size: 0.75rem; opacity: 0.6; }
</style>
