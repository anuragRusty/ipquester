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
    color: black;
  }

  .head{
    font-size: 2em;
    font-weight: bolder;
  }

  .info{
    font-size: 1.2em;
  }

  .objective{
    border: solid 2px black;
    border-radius: 10px;
    width: 50%;
    aspect-ratio: 2/1;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(242, 242, 242, 0.6);
    padding: 15px;
  }
</style>

