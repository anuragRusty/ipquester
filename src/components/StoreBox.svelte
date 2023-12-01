<script>
    import Typewriter from 'svelte-typewriter';
    import { fade, scale } from "svelte/transition";
    import {game} from "./store";
    import Coin from "../assets/ipo_coin.png"

    let items = [
      {
         name:"GUIDE BOOK",
         count:4,
         price:200,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"MAIL",
         count:2,
         price:150,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"FILE",
         count:72,
         price:175,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"PEN",
         count:123,
         price:20,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"STAMPPAPER",
         count:82,
         price:125,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"STAMP",
         count:12,
         price:100,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"BOOST",
         count:110,
         price:110,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"SLICER",
         count:0,
         price:1000,
         description:"In the realm of intellectual property, where ideas dance with innovation and creativity, a guidebook unfolds, offering a roadmap for the curious minds navigating this intricate landscape. Dotting the pages are insights into patents, trademarks, and copyrights, each punctuation mark delineating a crucial aspect of safeguarding ingenuity.",
      },
      {
         name:"REWIND",
         count:34,
         price:20000,
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
    <div class="name2" in:fade>{selectedItem.name}   <img alt="coin" src={Coin} class="coin">x{selectedItem.price} </div>
    <div class="text2" in:fade><Typewriter>{selectedItem.description}</Typewriter></div>
    <div class="control">
      <button class="option">BUY</button>
      <button class="count">AVAILABLE {selectedItem.count}</button>
      <button class="option">USE</button>
    </div>
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
      width: 14%;
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
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: larger;
    }

    .name2{
      font-size: 200%;
    }

    .text2{
      font-size: 110%;
      width: 90%;
      height: 35%;
    }

    .control{
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .option{
        font-size: 3rem;
        width: auto;
        border: 2px solid transparent;
        border-radius: 25px;
    }

    .count{
      font-size: 180%;
    }

    .option:hover{
       border: 2px solid black;
       scale:1.025;
       background-color: rgba(242, 242, 242, 0.7);
    }

    .coin{
      width: 29px;
      height: 29px;
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
         font-size: 140%;
       }
       .text2{
        font-size: 80%;
        aspect-ratio: 1/1;
        height: auto;
       }

       .count{
        font-size: 120%;
       }

       .coin{
        width: 23px;
        height: 23px;
      }
       .icon2{
        width: 25%;
       }
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

</style>