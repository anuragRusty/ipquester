<script>
import { fade } from "svelte/transition";
let searchText = "";
let profiles = new Array(100).fill("Dummy Profiles");
</script>

<div class="container" in:fade>
  <input class="search" type="text" bind:value={searchText} placeholder="Search...">
  <div class="list">
  {#each profiles as profile,i}
    {#if profile.toLowerCase().includes(searchText.toLowerCase())}
     <div class="profile">{i+1}. {profile + Math.floor(Math.random()*10000)}</div>
    {/if}
   {/each}
  </div>
</div>

<style>
    .container{
        width: 85%;
        height: 85%;
        display: flex;
        flex-direction: column;
    }

    .list{
        width: 100%;
        height: 400px;
        overflow-y: scroll;
        margin: 10px;
    }

   .profile{
      font-size: 2em;
   }

  .search{
     margin: 10px;
     background-color: transparent;
     border: 2px solid black;
     border-radius: 5px;
     font-size: 1.35em;
     font-family: 'VT323';
     width: 50%;
     margin-left: 25%;
   }

  .list::-webkit-scrollbar {
    width: 18px;
  }

  .list::-webkit-scrollbar-track {
   border: 2px solid black;
  }

  .list::-webkit-scrollbar-thumb {
    background-color: black;
  }

</style>