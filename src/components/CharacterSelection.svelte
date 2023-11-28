<script>
    import { fade, scale } from "svelte/transition";
    import Typewriter from 'svelte-typewriter';
    import {game} from "./store";
    
    const Characters = [
        {
            name:"Anjalita",
            about:"Just some random text about the game character who is also a part of Game development team. Nothing to woory about is just temporary text for everyone.",
        },
        {
            name:"Subhi",
            about:"Just some random text about the game character who is also a part of Game development team. Nothing to woory about is just temporary text for everyone.",
        },
        {
            name:"Rohini",
            about:"Just some random text about the game character who is also a part of Game development team. Nothing to woory about is just temporary text for everyone.",
        },
        {
            name:"Ankit",
            about:"Just some random text about the game character who is also a part of Game development team. Nothing to woory about is just temporary text for everyone.",
        },
        {
            name:"Anurag",
            about:"Just some random text about the game character who is also a part of Game development team. Nothing to woory about is just temporary text for everyone.",
        },
        {
            name:"Tuhin",
            about:"Just some random text about the game character who is also a part of Game development team. Nothing to woory about is just temporary text for everyone.",
        },
    ];

    function handleClick(char){
        $game.player.char = char.name;
        $game.player.about = char.about;
        $game.stateStack.push("Character"); 
        $game.state = $game.stateStack[$game.stateStack.length-1];
    }
</script>
    <div class="container" in:fade>
    {#if $game.state == "CSelection"}
     <div class="characters-box">
       <div class="character-option">
        {#each Characters as character}
            <button class="char" on:click={() => handleClick(character)}>
            <div class="character {character.name.toLowerCase()}"></div>
            <div class="character-name">{character.name.toUpperCase()}</div>
            </button>
        {/each}
       </div>
       <h2>SELECT YOUR GAME CHARCTER</h2>
    </div>
    {:else if $game.state == "Character"}
       <div class="about-box" in:fade>
         <div class="selected-char {$game.player.char.toLowerCase()}" in:scale></div>
         <div class="about" in:fade><Typewriter>{$game.player.about}</Typewriter></div>
         <button class="option" on:click={() => {$game.stateStack.push("LSelection"); $game.state = $game.stateStack[$game.stateStack.length-1]}}>CONTINUE</button>
       </div>
    {/if}
    </div>
    
    <style>
        .container{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .characters-box{
            display: flex;
            width: 100%;
            height: 75%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .about-box{
            width: 70%;
            height: 75%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: solid 2px black;
            border-radius: 10px;
            background-color: rgba(255,255,255,0.6);
        }

        .about{
            width: 90%;
            height: 50%;
            color:black;
            font-size: larger;
         }
    
        .character-option{
            width: 98%;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }

        .selected-char{
            width: 15%;
            aspect-ratio: 1/1;
            background-size: cover;
        }
    
        .char{
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

         .option{
        font-size: 220%;
        width: auto;
        border: 2px solid transparent;
        border-radius: 25px;
        }

        .option:hover{
         border: 2px solid black;
         scale:1.025;
         background-color: rgba(242, 242, 242, 0.7);
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

        .characters-box{
            height: 100%;
        }

        .character-option{
          flex-wrap: wrap;
          gap:5px;
        }

        .selected-char{
            width: 45%;
        }

        .about-box{
            width: 97%;
            height: 86%;
        }

        .about{
            font-size: large;
            height: 50%;
        }

        .char{
          width: calc(33% - 3px);
          gap:10px;
        }

        h2{
         font-size: 160%;
         font-weight: bold; 
         }

         .character{
          width: 80%;
         }

         .character-name{
            font-size: large;
         }
      }
</style>