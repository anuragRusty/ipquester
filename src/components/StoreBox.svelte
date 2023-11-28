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
           width: calc(100% - 13px);
           height: calc(80% - 15px);
        }

      .title{
         font-size: 4rem;
       }
    }

</style>