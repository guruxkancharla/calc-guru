<script>
  import RadioBlock from "./RadioBlock.svelte";
  import dollar from "../images/icon-dollar.svg";
  import person from "../images/icon-person.svg";

  export let changeBill, changePeople, changeTip;
</script>

<div class="main">
  <div>
    <label for="bill">Bill</label>
    <div class="input-field">
      <img src={dollar} alt="icon" />
      <input type="text" name="bill" on:input={changeBill} />
    </div>
  </div>

  <RadioBlock {changeTip} />

  <div>
    <label for="people">Number of People</label>
    <div class="input-field">
      <img src={person} alt="icon" />
      <input type="text" name="people" on:input={changePeople} />
    </div>
  </div>
</div>

<style>
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  input,
  img {
    background-color: hsl(189, 41%, 97%);
  }

  input {
    width: 100%;
    padding: 0 0.75rem;
    text-align: right;
  }

  img {
    padding: 0.75rem;
  }

  .input-field {
    display: flex;
  }
</style>
