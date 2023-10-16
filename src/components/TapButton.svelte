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
      font-size: 600%;
      animation: blink 2s linear infinite;
      color:#f2f2f2;
    }

  @media (max-width: 768px) {
    .tap{
        font-size: 300%;
    }
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