<script>
import { fade } from "svelte/transition";
import {game} from "./store";

const Languages = ["English","Hindi","Bengali","Tamil","Telugu"];
let msg = " ";

function handleReset(){
  $game.sound = true;
  $game.language = "English";
  msg = "RESETED TO DEFAULT!";
  setTimeout(() => msg = " ",1500);
}

function handleSave(){
  msg = "SAVED SUCCESSFULLY!";
  setTimeout(() => msg = " ",1500);
}
</script>

<div class="container" in:fade>
  <div class="all-options">
    <div class="language">
    <label for="language-select">SELECT LANGUAGE</label>
    <select id="langauge-select" bind:value={$game.language}>
        {#each Languages as language}
        <option value={language}>{language}</option>
        {/each}
    </select>
    </div>
    <button class="option" on:click={() => $game.sound = !$game.sound}>SOUND {$game.sound ? "ON":"OFF"}</button>
    <button class="option" on:click={handleReset}>RESET</button>
    <button class="option" on:click={handleSave}>SAVE</button>
  </div>
  <div class="msg-box">{msg}</div>
</div>

<style>
.container{
    color: black;
    gap:50px;
}

.all-options,.language{
    display: flex;
    flex-direction: column;
}

.all-options{
    gap: 15px;
}

label,.option{
  font-size: 2.2rem;
}

select,option{
  font-size: 1.2rem;
  background-color: rgba(242, 242, 242, 0.7);
  border-radius: 8px;
  font-family: 'VT323';
}

.option{
    width: auto;
    border: 2px solid transparent;
    border-radius: 25px;
}

.option:hover{
    border: 2px solid black;
    scale:1.025;
    background-color: rgba(242, 242, 242, 0.8);
  }

  .msg-box{
    font-size: 1.5rem;
    height:10%;
    font-style: italic;
  }

  @media(max-width:768px){
    label,.option{
    font-size: 2rem;
    }

    select,option{
    font-size: 1rem;
    }
  }
</style>    