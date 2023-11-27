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
    <button class="btm menu" on:click={() => $game.state = "Menu"}></button>
        <button class="btm store" on:click={() => {$game.state = "Store"; $game.stateStack.push("Store");}}></button>
    {:else}
    <button class="btm back" on:click={handleBack}></button>
    {/if}
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
          background-color: rgba(242, 242, 242, 0.7);
          width: 80px;
          height: 80px;
          background-size: cover;
      }

      .back{
        background-image: url(../assets/back.png);
      }

      .store{
        background-image: url(../assets/store.png);
      }

      .menu{
        background-image: url(../assets/menu.png);
      }
  
     .btm:hover{
          scale:1.05;
          background-color: rgba(242, 242, 242, 0.9);
      }

      @media(max-width:768px){
        .container{
          right: 0;   
        }
        .btm{
          width: 48px;
          height: 48px;
        }
        .btm-menu{
           gap:5px;
           padding: 5px;
        }
      }
  </style>