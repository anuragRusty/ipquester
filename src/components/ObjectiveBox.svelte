<script>
import Typewriter from 'svelte-typewriter';
export let input_text;
</script>

<div class="container">
<div class="objective">
    <div class="head text">OBJECTIVE</div>
    <div class="info text">
      <Typewriter>
     {input_text}
    </Typewriter>
  </div>
 </div>
</div>

<style>
  .container{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .head{
    font-size: 40px;
    font-weight: bolder;
  }

  .info{
    font-size: larger;
  }

  .objective{
    border: solid 2px black;
    border-radius: 10px;
    width: 66%;
    aspect-ratio: 2/1;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(242, 242, 242, 0.6);
    padding: 15px;
  }
</style>

