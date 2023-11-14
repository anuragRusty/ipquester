<script>
    import { fade } from "svelte/transition";
    import {game} from "./store";
    
    const Characters = [
        {
            name:"Anjalita",
        },
        {
            name:"Subhi",
        },
        {
            name:"Rohini",
        },
        {
            name:"Ankit",
        },
        {
            name:"Anurag",
        },
        {
            name:"Tuhin",
        },
    ];
</script>
    
    <div class="container" in:fade>
       <div class="character-option">
          {#each Characters as character}
            <button class="char" on:click={() => $game.state = "LSelection"}>
            <div class="character {character.name.toLowerCase()}"></div>
            <div class="character-name">{character.name.toUpperCase()}</div>
            </button>
          {/each}
       </div>
       <h2>SELECT YOUR GAME CHARCTER</h2>
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
    
        .character-option{
            width: 98%;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            display: flex;
            justify-content: center;
        }
    
        .char{
            width: 10%;
            aspect-ratio: 1/1;
            background-color: rgba(255,255,255,0.6);
            border: solid 1px black;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: black;
        }
    
        .char:hover{
            scale:1.05;
            background-color: rgba(255,255,255,0.7);
        }
    
        .character{
            width: 80%;
            aspect-ratio: 1/1;
            background-size: cover;
        }
    
        .character-name{
            font-size: 240%;
         }

         .anjalita{
            background-image: url("../assets/anjalita.png");
         }

         .anurag{
            background-image: url("../assets/anurag.png");
         }

         .subhi{
            background-image: url("../assets/subhi.png");
         }

         .rohini{
            background-image: url("../assets/rohini.png");
         }

         .ankit{
            background-image: url("../assets/ankit.png");
         }

         h2{
           font-size: 360%;
           font-weight: bold; 
           animation: blink 2s linear infinite;
         }


       @keyframes blink {
        0% {
         opacity: 0;
          }
        50% {
          opacity: 1;
        }
      }

      @media(max-width:768px){
        .container{
            height: 90%;
        }

        .character{
            width: 95%;
        }

        .character-option{
          flex-wrap: wrap;
          justify-content: left;
        }

        .char{
          width: calc(33% - 10px);
          gap:10px;
        }

        .level-option{
          gap: 10px;
        }

        h2{
         font-size: 160%;
         font-weight: bold; 
         }

         .character{
          width: 70%;
         }

         .character-name{
            font-size: large;
         }
      }
</style>