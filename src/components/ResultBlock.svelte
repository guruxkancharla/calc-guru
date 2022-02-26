<script>
  export let total, tip_amount;
</script>

<main>
  <div class="flex justify-between text-white items-center">
    <div>
      <p class="text-sm">Tip Amount</p>
      <span class=" text-dgc2 text-xs">/ person</span>
    </div>

    <p class=" text-sc font-extrabold text-3xl">${tip_amount}</p>
  </div>

  <div class="flex justify-between text-white items-center">
    <div>
      <p class="text-sm">Total</p>
      <span class=" text-dgc2 text-xs">/ person</span>
    </div>

    <p class=" text-sc font-extrabold text-3xl">${total}</p>
  </div>
  <button>Reset</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: hsl(183, 100%, 15%);
    width: 100%;
    padding: 2rem 1.5rem;
    border-radius: 0.75rem;
  }
  button {
    width: 100%;
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: 800;
    border-radius: 0.375rem;
    margin-top: auto;
  }
</style>
