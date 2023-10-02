<script>
import {fade} from "svelte/transition";
let Player = new Array(125).fill("Dummy Player");
</script>

<div class="container" in:fade>
 <div class="list">
 <div class="player">
  <b>Rank</b>
  <b>Name</b>
  <b>Score</b>
  <b>Date</b>
 </div>
  {#each Player as player,i}
  <div class="player">
    {#if i === 0}
    <div class="rank rank-top gold">{i+1}</div>
    {:else if i === 1}
    <div class="rank rank-top silver">{i+1}</div>
    {:else if i === 2}
    <div class="rank rank-top bronze">{i+1}</div>
    {:else}
    <div class="rank text">{i+1}</div>
    {/if}
    <div class="name text">{player + Math.floor(Math.random()*10000)}</div>
    <div class="score text">{Math.floor(Math.random()*1000000)}</div>
    <div class="date text">{(Math.floor(Math.random()*30)) + "/" + (Math.floor(Math.random()*12)) + "/" + 2023}</div>
  </div>
  {/each}
 </div>       
</div>

<style>
    .container{
        width: 85%;
        height: 85%;
    }

    .player{
       font-size: 1.1em;
       display: flex;
       justify-content: space-between;
       margin: 10px;
    }

    .list{
        width: 100%;
        height: 400px;
        overflow-y: scroll;
    }

    .rank{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .rank-top{
      font-weight: bolder;
    }

    .gold{
      background-color:#FFD700;
      border: 2px solid #c9ac09;
      color:#c9ac09;
    }

    .silver{
      background-color:#C0C0C0;
      border: 2px solid #868484;
      color:#868484;
    }

    .bronze{
      background-color:#cd7f32;
      border: 2px solid #985e24;
      color:#985e24;
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