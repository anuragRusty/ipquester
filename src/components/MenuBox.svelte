<script>
    import { fade } from "svelte/transition";
    import AboutBox from "./AboutBox.svelte";
    let stack = [];
    let title = "MENU";

    function handleClick(btn){
       title = btn;
       stack.push(btn);
    }

    function handleBack(){
       stack.pop();
       if(stack.length === 0)
         title = "MENU";
    }
</script>

<div class="container" in:fade>
  <div class="menu-box">
      <div class="title">{title}</div>
      {#if title === "MENU"}
        <div class="all-options" in:fade>
          <button class="option" on:click={() => handleClick("NEW PROFILE")}>NEW PROFILE</button>
          <button class="option" on:click={() => handleClick("LOAD PROFILE")}>LOAD PROFILE</button>
          <button class="option" on:click={() => handleClick("LEADERBOARD")}>LEADERBOARD</button>
          <button class="option" on:click={() => handleClick("OPTIONS")}>OPTIONS</button>
          <button class="option" on:click={() => handleClick("ABOUT")}>ABOUT</button>
       </div>
      {:else if title === "ABOUT"}
      <AboutBox/>
      {/if}
      {#if title !== "MENU"}
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
      width: 40%;
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
       font-size: 400%;
       color: #000;
    }

    .all-options{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .option{
        font-size: 220%;
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
            width: 95%;
            height: auto;
            aspect-ratio: 3/4.75;
        }

        .title{
         font-size: 300%;
       }

       .option{
        font-size: 200%;
      }

      .all-options{
        gap: 15px;
      }
    }
</style>