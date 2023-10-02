<script>
import {fade} from "svelte/transition";
import AboutBox from "./AboutBox.svelte";
import LeaderBoard from "./LeaderBoard.svelte";
import NewProfile from "./NewProfile.svelte";
    import AllProfiles from "./AllProfiles.svelte";

let title = "MENU"; //MENU,ABOUT,NEW PROFILE,ALL PROFILES;

</script>

<div class="container" in:fade>
  <div class="sub-container">
    <div class="title">{title}</div>
    {#if title === "MENU"}
     <div class="menu-option" in:fade>
       <button class="option" on:click={() => title = "NEW PROFILE"}>NEW GAME</button>
       <button class="option" on:click={() => title = "ALL PROFILES"}>LOAD GAME</button>
       <button class="option" on:click={() => title = "LEADERBOARD"}>LEADERBOARD</button>
       <button class="option" on:click={() => title = "ABOUT"}>ABOUT</button>
     </div>
     {:else if title === "ABOUT"}
     <AboutBox/>
     {:else if title === "LEADERBOARD"}
     <LeaderBoard/>
     {:else if title === "NEW PROFILE"}
     <NewProfile/>
     {:else if title === "ALL PROFILES"}
     <AllProfiles/>
     {/if}
     {#if title !== "MENU"}
     <div class="back">
      <button class="option" on:click={() => title = "MENU"}>BACK</button>
     </div>
     {/if}
</div>
</div>

<style>

.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
}

.sub-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40%;
    aspect-ratio: 1;    
    background-color: rgba(242, 242, 242, 0.6);
    border: solid 2px black;
    border-radius: 10px;
    gap:10px;
}

.menu-option{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.back{
    width: calc(100% - 60px);
    display: flex;
    justify-content: flex-end;
}

.option{
    font-size: 1.8em;
    color: black;
    border: 1px solid rgba(0,0,0,0);
    border-radius:20px;
}

.option:hover{
    border: 2px solid black;
    scale: 1.025;
}

.title{
    font-weight: 200;
    font-size: 3.5em;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
}

</style>