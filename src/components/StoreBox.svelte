<script>
    import { fade } from "svelte/transition";


</script>

<div class="container" in:fade>
  <div class="store-box">
    <div class="title">STORE</div>

  </div>
</div>

<style>
    .container{
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .store-box{
       width:630px;
       aspect-ratio: 1/1;
       display: flex;
       justify-content: center;
       border: solid 2px black;
       border-radius: 10px;
       background-color: rgba(242, 242, 242, 0.7); 
    }

    .title{
       font-size: 4.8rem;
       color: #000;
    }

    @media(max-width:768px){
        .store-box{
            width: 94%;
            height: auto;
            aspect-ratio: 3/4.2;
        }

      .title{
         font-size: 4rem;
       }
    }

</style>