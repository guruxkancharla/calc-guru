<script>
  import InputBlock from "../components/InputBlock.svelte";
  import ResultBlock from "../components/ResultBlock.svelte";
  import logo from "../images/logo.svg";

  let bill, people, tip;

  $: total = (
    isNaN(bill / people) || bill / people === Infinity ? 0 : bill / people
  ).toFixed(2);
  $: tip_amount = (
    isNaN((bill * tip) / 100 / people) ||
    (bill * tip) / 100 / people === Infinity
      ? 0
      : (bill * tip) / 100 / people
  ).toFixed(2);

  function changeBill(event) {
    bill = event.target.value;
  }
  function changePeople(event) {
    people = event.target.value;
  }

  function changeTip(event) {
    tip = event.target.value;
  }
</script>

<main>
  <img src={logo} alt="" />
  <div class="main">
    <InputBlock {changeBill} {changePeople} {changeTip} />
    <ResultBlock {total} {tip_amount} />
  </div>
</main>

<style>
  img {
    margin: 0 auto 2rem auto;
  }

  main {
    background-color: hsl(185, 41%, 84%);
    width: 100vw;
    height: 100vh;
    font-family: "Space Mono", monospace;
    padding-top: 2rem;
  }

  .main {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 1rem 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media screen and (min-width: 415px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .main {
      width: 48rem;
      height: fit-content;
      flex-direction: row;
    }
  }
</style>
