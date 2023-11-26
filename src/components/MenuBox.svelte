<script>
    import { fade } from "svelte/transition";
    import AboutBox from "./AboutBox.svelte";
    import OptionsBox from "./OptionsBox.svelte";
    import LeaderBoard from "./LeaderBoard.svelte";
    import LoadProfile from "./LoadProfile.svelte";
    import NewProfile from "./NewProfile.svelte";
    import {game} from "./store";

    let stack = [];
    let title = "PROFILE"; // MENU,PROFILE,LOAD PROFILE,NEW PROFILE,ABOUT,

    function handleClick(btn){
       title = btn;
       stack = [...stack,btn];
    }

    function handleBack(){
       stack = stack.slice(0,stack.length-1);
       if(stack.length === 0)
         title = "PROFILE";
    }
</script>

<div class="container" in:fade>
  <div class="menu-box">
      <div class="title">{title}</div>
      {#if title === "MENU" || title === "PROFILE"}
        <div class="all-options" in:fade>
          {#if title === "MENU"}
          <button class="option" on:click={() => handleClick("NEW PROFILE")}>NEW PROFILE</button>
          <button class="option" on:click={() => handleClick("LOAD PROFILE")}>LOAD PROFILE</button>
          {:else if title === "PROFILE"}
          <button class="option" on:click={() => $game.state = "Running"}>CONTINUE</button>
          <button class="option" on:click={() => $game.state = "CSelection"}>NEW GAME</button>
          {/if}
          <button class="option" on:click={() => handleClick("LEADERBOARD")}>LEADERBOARD</button>
          <button class="option" on:click={() => handleClick("OPTIONS")}>OPTIONS</button>
          <button class="option" on:click={() => handleClick("ABOUT")}>ABOUT</button>
       </div>
      {:else if title === "ABOUT"}
      <AboutBox/>
      {:else if title === "OPTIONS"}
      <OptionsBox/>
      {:else if title === "LEADERBOARD"}
      <LeaderBoard/>
      {:else if title === "LOAD PROFILE"}
      <LoadProfile/>
      {:else if title === "NEW PROFILE"}
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