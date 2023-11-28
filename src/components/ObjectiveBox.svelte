<script>
import Typewriter from 'svelte-typewriter';
import { fade } from 'svelte/transition';
import {game} from "./store";

export let input_text;
</script>

<div class="container" in:fade>
<div class="objective">
    <div class="head text">OBJECTIVE</div>
    <div class="info text">
     <Typewriter>
     {input_text}
    </Typewriter>
  </div>
<div class="start">
 <button class="option" on:click={() => {$game.stateStack.push("Running"); $game.state = $game.stateStack[$game.stateStack.length-1];}}>START</button>
</div>
 </div>
</div>

<style>
  .container{
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
  }

  .head{
    font-size: 200%;
    font-weight: bolder;
    margin: 15px 15px 0px 15px;
  }

  .info{
    font-size: 120%;
    height: 78%;
    margin: 0px 15px 0px 15px;
  }

  .objective{
    width: 70%;
    height: 75%;
    display: flex;
    flex-direction: column;
    border: solid 2px black;
    border-radius: 10px;
    background-color: rgba(242, 242, 242, 0.6);
  }

  .start{
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .option{
    font-size: 220%;
    width: auto;
    border: 2px solid transparent;
    border-radius: 25px;
    margin: 0px 15px 0px 15px;
  }

  .option:hover{
      scale:1.025;
      border: 2px solid black;
      background-color: rgba(242, 242, 242, 0.7);
  }

  @media(max-width:768px){
    .objective{
      width: calc(100% - 13px);
      height: calc(80% - 15px);
    }

    .head{
    font-size: 160%;
    font-weight: bolder;
    margin: 7.5px 7.5px 0px 7.5px;
   }

  .info{
    font-size: 90%;
    margin: 0px 7.5px 0px 7.5px;
   }
  }
</style>

