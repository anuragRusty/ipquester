<script>
import { fade } from "svelte/transition";

const Languages = ["English","Hindi","Bengali","Tamil","Telugu"];
let soundEnabled = true;
let selectedLang = "English";
let msg = " ";

function handleReset(){
  soundEnabled = true;
  selectedLang = "English";
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
    <select id="langauge-select" bind:value={selectedLang}>
        {#each Languages as language}
        <option value={language}>{language}</option>
        {/each}
    </select>

    </div>
    <button class="option" on:click={() => soundEnabled = !soundEnabled}>SOUND {soundEnabled ? "ON":"OFF"}</button>
    <button class="option" on:click={handleReset}>RESET</button>
    <button class="option" on:click={handleSave}>SAVE</button>
  </div>
  <div class="msg-box">{msg}</div>
</div>

<style>
.container{
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#000;
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
  font-size: 220%;
}

select,option{
  font-size: 120%;
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
  }

  .msg-box{
    font-size: 150%;
    height:10%;
    font-style: italic;
  }

  @media(max-width:768px){
    label,.option{
    font-size: 200%;
    }

    select,option{
    font-size: 100%;
    }
  }
</style>    