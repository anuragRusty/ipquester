<script>
import { fade } from "svelte/transition";
import {game} from "./store";

let Ips = ["patents","trademarks","copyrights","designs"];
</script>

<div class="container" in:fade>
   <div class="level-option">
      {#each Ips as ip}
        <button class="ip" on:click={() => $game.state = "Objective"}>
        <div class="icon {ip}"></div>
        <div class="icon-name">{ip.toUpperCase()}</div>
        </button>
      {/each}
   </div>
   <h2>SELECT YOUR LEVEL TYPE</h2>
</div>

<style>
    .container{
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .level-option{
        width: 98%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        display: flex;
        justify-content: center;
    }

    .ip{
        width: 12%;
        aspect-ratio: 1/1;
        background-color: rgba(255,255,255,0.6);
        border: solid 1px black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
    }

    .ip:hover{
        scale:1.05;
        background-color: rgba(255,255,255,0.7);
    }

    .icon{
        width: 80%;
        aspect-ratio: 1/1;
        background-size: cover;
    }

    .icon-name{
        font-size: 240%;
     }

    .patents{
        background-image: url(../assets/patent.png);
    }

    .trademarks{
        background-image: url(../assets/tm.png);
    }

    .copyrights{
        background-image: url(../assets/cp.png);
    }

    .designs{
        background-image: url(../assets/designs.png);
    }

    h2{
       font-size: 400%;
       font-weight: bold; 
       animation: blink 2s linear infinite;
    }

    @media(max-width:768px){
        .container{
            height: 90%;
        }

        .ip{
          width: calc(25% - 5px);
          gap:10px;
        }

        .level-option{
          gap: 5px;
        }

        h2{
         font-size: 180%;
         font-weight: bold; 
         }

         .icon{
          width: 70%;
         }

         .icon-name{
            font-size: large;
         }
      }

       @keyframes blink {
        0% {
         opacity: 0;
          }
        50% {
          opacity: 1;
        }
    }
</style>