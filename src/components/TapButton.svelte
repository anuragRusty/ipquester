<script>
export let onClick;

</script>

<button class="tap" on:click={onClick}>
TAP TO START
</button>

<style>
    .tap{
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      align-items: center;
      font-size: 6em;
      animation: blink 2s linear infinite;
    }

  @keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>