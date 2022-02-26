<script>
  export let changeTip;
</script>

<div>
  <label for="tip" class="text-sm block mb-1">Select Tip %</label>
  <div class="radio" on:click={changeTip}>
    <label><input type="radio" name="tip" value="5" /> <span>5%</span></label>
    <label><input type="radio" name="tip" value="10" /> <span>10%</span></label>
    <label><input type="radio" name="tip" value="15" /> <span>15%</span></label>
    <label><input type="radio" name="tip" value="25" /> <span>25%</span></label>
    <label><input type="radio" name="tip" value="50" /> <span>50%</span></label>
    <input type="text" class="custom" placeholder="Custom" />
  </div>
</div>

<style>
  .custom {
    display: inline-block;
    background-color: hsl(189, 41%, 97%);
    text-align: center;
    font-size: 800;
  }
  .radio {
    @apply grid grid-cols-2 gap-3;
  }
  label input {
    @apply hidden;
  }
  label span {
    @apply inline-block p-2 bg-vdc w-full text-center text-white font-extrabold rounded;
  }

  input:checked + span {
    @apply bg-sc text-vdc;
  }

  @media screen and (min-width: 415px) {
    .radio {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
