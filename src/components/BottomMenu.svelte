<script>

import { game } from "./store";

function handleBack(){
    if($game.stateStack.length > 1){
        $game.stateStack.pop();       
    }else{
        $game.state = "Menu";
        return;
    }
    $game.state = $game.stateStack[$game.stateStack.length-1];
}

</script>
<div class="container">
  <div class="btm-menu">
    {#if $game.state == "Running"}
    <button class="btm" on:click={() => $game.state = "Menu"}>MENU</button>
    {:else}
    <button class="btm" on:click={handleBack}>BACK</button>
    {/if}
    <button class="btm" on:click={handleBack}>STORE</button>
 </div>
</div>

<style>
    .container{
       position: fixed;
       bottom: 0;
       right: 0;
       direction: rtl;
    }

    .btm-menu{
         width:100%;
         display: flex;
         gap: 10px;
         padding: 10px;
         justify-content: center;
    }
  
    .btm{
          font-size: 3rem;
          width: auto;
          border: 2px solid black;
          border-radius: 10px;
          background-color: rgba(242, 242, 242, 0.6);
      }
  
     .btm:hover{
          scale:1.05;
          background-color: rgba(242, 242, 242, 0.8);
      }

      @media(max-width:768px){
        .container{
          left:55%;    
        }
        .btm{
          font-size: 1.9rem;
        }
        .btm-menu{
           gap:5px;
        }
      }
  </style>