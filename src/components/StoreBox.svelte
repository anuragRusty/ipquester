<script>
    import { fade } from "svelte/transition";
    let items = [
      {
         name:"GUIDE BOOK",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"MAIL",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"FILE",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"PEN",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"STAMP PAPER",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"STAMP",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"BOOST",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"50-50",
         count:0,
         price:0,
         description:"text",
      },
      {
         name:"REWIND",
         count:0,
         price:0,
         description:"text",
      },
    ];

</script>

<div class="container" in:fade>
  <div class="store-box">
    <div class="title">STORE</div>
     <div class="items-box">
     {#each items as item}
      <div class="item">
      <div class="icon {item.name.trim().toLowerCase()}"></div>
      <div class="name">{item.name}</div>
      </div>
     {/each}
    </div>
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
       justify-content: center;
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

    .icon{
      width: 80%;
      aspect-ratio: 1/1;
      background-size: cover;
    }

    .icon:hover{
      scale: 1.05;
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

    .stamp{
      background-image: url(../assets/stamppaper.png);
    }

    .rewind{
      background-image: url(../assets/rewind.png);
    }

    .boost{
      background-image: url(../assets/boost.png);
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

    @media(max-width:768px){
      .store-box{
         width: calc(100% - 13px);
         height: calc(80% - 15px);
      }

      .item{
           width: calc(33% - 10px);
      }

      .title{
         font-size: 4rem;
       }

       .name{
         font-size: 80%;
       }
    }

</style>