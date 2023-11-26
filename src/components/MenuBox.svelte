<script>
    import { fade } from "svelte/transition";
    import AboutBox from "./AboutBox.svelte";
    import OptionsBox from "./OptionsBox.svelte";
    import LeaderBoard from "./LeaderBoard.svelte";
    import LoadProfile from "./LoadProfile.svelte";
    import NewProfile from "./NewProfile.svelte";
    import {game} from "./store";

    let stack = [];

    function handleClick(btn){
       $game.menu = btn;
       stack = [...stack,btn];
    }

    function handleBack(){
       stack = stack.slice(0,stack.length-1);
       if(stack.length === 0)
         $game.menu= "PROFILE";
    }
</script>

<div class="container" in:fade>
  <div class="menu-box">
      <div class="title">{$game.menu}</div>
      {#if $game.menu=== "MENU" || $game.menu=== "PROFILE"}
        <div class="all-options" in:fade>
          {#if $game.menu=== "MENU"}
          <button class="option" on:click={() => handleClick("NEW PROFILE")}>NEW PROFILE</button>
          <button class="option" on:click={() => handleClick("LOAD PROFILE")}>LOAD PROFILE</button>
          {:else if $game.menu=== "PROFILE"}
          <button class="option" on:click={() => $game.state = "Running"}>CONTINUE</button>
          <button class="option" on:click={() => {$game.state = "CSelection"; $game.stateStack.push("CSelection");}}>NEW GAME</button>
          {/if}
          <button class="option" on:click={() => handleClick("LEADERBOARD")}>LEADERBOARD</button>
          <button class="option" on:click={() => handleClick("OPTIONS")}>OPTIONS</button>
          <button class="option" on:click={() => handleClick("ABOUT")}>ABOUT</button>
       </div>
      {:else if $game.menu=== "ABOUT"}
      <AboutBox/>
      {:else if $game.menu=== "OPTIONS"}
      <OptionsBox/>
      {:else if $game.menu=== "LEADERBOARD"}
      <LeaderBoard/>
      {:else if $game.menu=== "LOAD PROFILE"}
      <LoadProfile/>
      {:else if $game.menu=== "NEW PROFILE"}
      <NewProfile/>
      {/if}
      {#if stack.length > 0}
      <div class="back-option" in:fade>
      <button class="option" on:click={handleBack}>BACK</button>
     </div>
      {:else}
      <div class="back-option"/>
      {/if}
  </div>
</div>

<style>
    .container{
      width:100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu-box{
      width: 630px;
      aspect-ratio: 1/1;
      border: solid 2px black;
      border-radius: 10px;
      background-color: rgba(242, 242, 242, 0.6);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }

    .title{
       font-size: 4.8rem;
       color: #000;
    }

    .all-options{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .option{
        font-size: 2.5rem;
        width: auto;
        border: 2px solid transparent;
        border-radius: 25px;
    }

    .option:hover{
       border: 2px solid black;
       scale:1.025;
       background-color: rgba(242, 242, 242, 0.7);
    }

    .back-option{
        width: 85%;
        display: flex;
        justify-content: right;
    }

    @media(max-width:768px){
       .menu-box{
            width: 94%;
            height: auto;
            aspect-ratio: 3/5;
        }

      .title{
         font-size: 4rem;
       }

      .option{
        font-size: 2.2rem;
      }

      .all-options{
        gap: 15px;
      }
    }
</style>