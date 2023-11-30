<script>
    import Typewriter from 'svelte-typewriter';
    import { fade, scale } from "svelte/transition";
    import {game} from "./store";

    let items = [
      {
         name:"GUIDE BOOK",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"MAIL",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"FILE",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"PEN",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"STAMPPAPER",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"STAMP",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"BOOST",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"SLICER",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"REWIND",
         count:0,
         price:0,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
    ];

    let selectedItem = {};

    function handleClick(item){
      selectedItem = item;
      $game.stateStack.push("StoreItem");
      $game.state = $game.stateStack[$game.stateStack.length-1];
    }

</script>

<div class="container" in:fade>
  <div class="store-box">
    <div class="title">STORE</div>
    {#if $game.state == "Store"}
       <div class="items-box" in:fade>
       {#each items as item}
       <div class="item">
       <button class="icon {item.name.trim().toLowerCase()}" on:click={() => handleClick(item)}></button>
       <div class="name">{item.name}</div>
      </div>
     {/each}
    </div>
   {:else}
    <div class="icon2 {selectedItem.name.toLowerCase()}" in:scale></div>
    <div class="name2" in:fade>{selectedItem.name}</div>
    <div class="text2" in:fade><Typewriter>{selectedItem.description}</Typewriter></div>
   {/if}
  </div>
</div>

<style>
    .container{
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: black;
    }

    .store-box{
       width: 70%;
       height: 75%;
       display: flex;
       gap:15px;
       align-items: center;
       flex-direction: column;
       border: solid 2px black;
       border-radius: 10px;
       background-color: rgba(242, 242, 242, 0.7); 
    }

    .title{
       font-size: 4.8rem;
       color: #000;
    }

    .items-box{
      width: 90%;
      height: 80%;
      display: flex;
      flex-wrap: wrap;
      gap:10px;
    }

    .icon,.icon2{
      aspect-ratio: 1/1;
      background-size: cover;
    }

    .icon{
      width: 80%;
    }

    .icon:hover{
      scale: 1.1;
    }

    .icon2{
      width: 16%;
    }

    .item{
      width: calc(16.5% - 10px);
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap:5px;
    }

    .name{
      font-size: larger;
    }

    .name2{
      font-size: 200%;
    }

    .text2{
      font-size: 120%;
      width: 90%;
    }

    .mail{
      background-image: url(../assets/mail.png);
    }

    .guide{
      background-image: url(../assets/gbook.png);
    }

    .file{
      background-image: url(../assets/file.png);
    }

    .pen{
      background-image: url(../assets/pen.png);
    }

    .stamppaper{
      background-image: url(../assets/stamppaper.png);
    }

    .rewind{
      background-image: url(../assets/rewind.png);
    }

    .boost{
      background-image: url(../assets/boost.png);
    }

    .slicer{
      background-image: url(../assets/50.png);
    }

    .stamp{
      background-image: url(../assets/stamp.png);
    }

    @media(max-width:768px){
      .store-box{
         width: calc(100% - 13px);
         height: calc(80% - 15px);
         gap: 5px;
      }

      .item{
           width: calc(25% - 10px);
      }

      .title{
         font-size: 4rem;
       }

       .name{
         font-size: 80%;
       }

       .name2{
         font-size: 130%;
       }
       .text2{
        font-size: 90%;
       }
       .icon2{
        width: 25%;
       }
    }

</style>