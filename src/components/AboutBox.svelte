<script>
    import {fade} from "svelte/transition";
</script>

<div class="container" in:fade>
  <div class="head">About the Game</div>
  <div class="text">"IP Quester" is an educational adventure game developed by Anurag Kumar Singh, Subhashini Subhi, Anjalita Kumari, Rohini Kumari, Ankit Raj, Tuhin Mandal, guided by Team's mentor Prof.Saunak Bhattacharya.</div>
  <div class="head">Game Concept</div>
  <div class="text">Explore intellectual property through dynamic queries and choices, shaping your unique story.</div>
  <div class="head">Gameplay</div>
  <div class="text">Navigate challenges, make choices, and grasp copyrights, trademarks, patents, and designs.</div>
  <div class="head">Education</div>
  <div class="text">"IP Quester" raises IP protection awareness, offering practical knowledge for anyone.</div>
</div>

<style>
.container{
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:#000;
}
    
.head{
   font-size: 200%;
   font-weight: 400;
   padding-top: 15px;
   padding-bottom: 5px;
 }

 .text{
    font-size: 100%;
 }

 @media(max-width:768px){
    .head {
      font-size: 130%;
      padding-bottom: 5px;
      padding-top: 5px;
      font-weight: 590;
    }

    .text{
    font-size: 90%;
   }
 }
    </style>