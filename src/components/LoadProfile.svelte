<script>
const Profiles = new Array(100).fill("Dummy Profile");
let searchText = "";
let selectedIndex;
</script>

<div class="container">
  <input class="search" placeholder="Search..." bind:value={searchText}>
  <div class="head">Username</div>
   <div class="profiles-list">
     {#each Profiles as profile,i}
       {#if profile.toLowerCase().includes(searchText.trim().toLowerCase())}
         {#if selectedIndex === i}
          <div class="profile selected" on:click={() => selectedIndex = i}>{profile}{Math.floor(Math.random()*10000)}</div>
         {:else}
          <div class="profile" on:click={() => selectedIndex = i}>{profile}{Math.floor(Math.random()*10000)}</div>
         {/if}
        {/if}
     {/each}
   </div>
   <button class="option">LOAD PROFILE</button>
   <div class="profile-details">
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
      gap: 10px;
    }

    .profiles-list{
      width: 100%;
      height: 350px;
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

    @media(max-width:768px){

      .container{
      width: 75%;
      height: 75%;
      }

    .head{
    font-size: 170%;
    }

    .profile{
    font-size: 100%;
    }

    .profile:hover{
    font-size:130%;
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