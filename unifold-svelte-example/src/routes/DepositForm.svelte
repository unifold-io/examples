<script lang="ts">
  import { getUnifold } from "@unifold/connect-svelte";
  import type { DepositResult, DepositError } from "@unifold/connect-svelte";

  const unifold = getUnifold();

  let status = $state<"idle" | "loading" | "success" | "error">("idle");
  let result = $state<DepositResult | null>(null);
  let error = $state<DepositError | null>(null);

  let externalUserId = $state("test_user_123");
  let destinationChainType = $state<"ethereum" | "solana" | "bitcoin">("ethereum");
  let destinationChainId = $state("42161");
  let destinationTokenAddress = $state("0xaf88d065e77c8cC2239327C5EDb3A432268e5831");
  let destinationTokenSymbol = $state("USDC");
  let recipientAddress = $state("0x309a4154a2CD4153Da886E780890C9cb5161553C");

  async function openDeposit() {
    status = "loading";
    result = null;
    error = null;

    try {
      const depositResult = await unifold.beginDeposit({
        externalUserId,
        destinationChainType,
        destinationChainId,
        destinationTokenAddress,
        destinationTokenSymbol,
        recipientAddress,
      });

      result = depositResult;
      status = "success";
    } catch (err) {
      error = err as DepositError;
      status = (err as DepositError)?.code === "DEPOSIT_CANCELLED" ? "idle" : "error";
    }
  }
</script>

<label>
  <span>External User ID</span>
  <input type="text" bind:value={externalUserId} />
</label>

<label>
  <span>Destination Chain Type</span>
  <select bind:value={destinationChainType}>
    <option value="ethereum">ethereum</option>
    <option value="solana">solana</option>
    <option value="bitcoin">bitcoin</option>
  </select>
</label>

<label>
  <span>Destination Chain ID</span>
  <input type="text" bind:value={destinationChainId} />
</label>

<label>
  <span>Destination Token Address</span>
  <input type="text" bind:value={destinationTokenAddress} />
</label>

<label>
  <span>Destination Token Symbol</span>
  <input type="text" bind:value={destinationTokenSymbol} />
</label>

<label>
  <span>Recipient Address</span>
  <input type="text" bind:value={recipientAddress} />
</label>

<button class="deposit-btn" onclick={openDeposit} disabled={status === "loading"}>
  {#if status === "loading"}
    Opening...
  {:else}
    Deposit Funds
  {/if}
</button>

{#if status === "success" && result}
  <div class="feedback success">
    <strong>Deposit complete</strong>
    <p>{result.message}</p>
    {#if result.executionId}
      <code>Execution ID: {result.executionId}</code>
    {/if}
  </div>
{/if}

{#if status === "error" && error}
  <div class="feedback error">
    <strong>Deposit failed</strong>
    <p>{error.message}</p>
  </div>
{/if}
