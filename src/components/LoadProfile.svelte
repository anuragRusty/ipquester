<script>
import { fade } from "svelte/transition";
const Profiles = ["Hello","World","Dummy guy","Pro Bandha","Tron Guy","Avengers","Batman","Superman","Spiderman Guy","flash Boi","Alex Boi"];
let searchText = "";
let password = "";
let selectedIndex;
let msg = "Password incorrect!";
</script>

<div class="container">
  <input class="search" placeholder="Search..." bind:value={searchText}>
  <div class="head">Username</div>
   <div class="profiles-list">
     {#each Profiles as profile,i}
       {#if profile.toLowerCase().includes(searchText.trim().toLowerCase())}
         {#if selectedIndex === i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="profile selected" on:click={() => selectedIndex = i}>{profile}{Math.floor(Math.random()*10000)}</div>
         {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="profile" on:click={() => selectedIndex = i}>{profile}{Math.floor(Math.random()*10000)}</div>
         {/if}
        {/if}
     {/each}
   </div>
   <div class="load-profile">
   {#if selectedIndex !== undefined}
   <div class=label><b>Profile:</b>{Profiles[selectedIndex]}</div>
   <div class="label" in:fade><b>Password</b></div>
   <input class="input" type="password" bind:value={password} in:fade>
   <button class="option" in:fade>LOAD PROFILE</button>
   <i>{msg}</i>
   {/if}
  </div>
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
      gap: 12px;
    }

    .profiles-list{
      width: 100%;
      height: 300px;
      overflow-y: scroll;
    }

    .head{
    font-size: 200%;
    font-weight: 500;
    border-bottom: solid 2px black;
    width: 100%;
   }

   .profile{
    font-size: 130%;
    border: solid 2px transparent;
    border-radius: 7px;
    margin: 7px;
   }

   .input{
        background-color: transparent;
        border-radius: 5px;
        font-family: 'VT323';
        border: 2px solid black;
    }

    .input,.label{
      font-size: 100%;
    }

   .selected{
    border: solid 2px black;
   }

   .profile:hover{
    font-size:150%;
   }

   .search{
     width: 40%;
     font-size: 120%;
     background-color: transparent;
     border: 2px solid black;
     border-radius: 5px;
     font-family: 'VT323';
     width: 50%;
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

    .load-profile{
      display: flex;
      flex-direction: column;
      gap: 3px;
      height: 33%;
    }

    i{
      text-align: center;
    }

    @media(max-width:768px){

    .container{
    width: 75%;
    height: 75%;
    }

    .head{
    font-size: 140%;
    }

    .profile{
    font-size: 100%;
    }

    .profile:hover{
    font-size:130%;
    }

    .profiles-list{
      height: 300px;
    }

    .search{
     width: 60%;
     font-size: 100%;
    }
  }

   .profiles-list::-webkit-scrollbar {
    width: 18px;
  }

  .profiles-list::-webkit-scrollbar-track {
   border: 2px solid black;
  }

  .profiles-list::-webkit-scrollbar-thumb {
    background-color: black;
  }
</style>