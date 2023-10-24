<script>
    import { onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    let levels = Math.floor(Math.random()*20);
    let progress = Math.floor(Math.random()*101);
    
    let temp_score = Math.floor(Math.random()*10000);
    let score = 0;
    let score_interval;
    let temp_coins = Math.floor(Math.random()*100);
    let coins = 0;
    let coin_interval;

    function animateScore(){
      clearInterval(score_interval);
      score_interval = setInterval(() => {
        if(temp_score > 0){
          temp_score -= 1;
          score += 1;
        }else{
          clearInterval(score_interval);
        }
      },1);
    }

    function animateCoin(){
      clearInterval(coin_interval);
      coin_interval = setInterval(() => {
        if(temp_coins > 0){
          temp_coins -= 1;
          coins += 1;
        }else{
          clearInterval(coin_interval);
        }
      },15);
    }

    $:{
      animateScore();
      animateCoin();
    }

    function addZeroes(x,nzero){
      let length = x.toString().length;
      let zeroes = new Array(nzero-length).fill("0").join("");
      return zeroes + x;
    }

    onDestroy(() => {clearInterval(coin_interval); clearInterval(score_interval)});
</script>

<div class="container" in:fade>
  <div class="progress box">
    <div class="progress-bar">
      <div class="color-bar" style="width:{progress}%;">
        <div class="light-color-bar"></div>
      </div>
    </div>
    <div class="progress-text">PROGRESS {progress}%</div>
  </div>  
  <div class="level">LEVEL {levels}</div>
  <div class="score">
    <div class="score-count">{addZeroes(score,7)}</div>
    <div class="coin-count">
      <div class="coin"></div>
      <div class="coin-text">x{coins}</div>
   </div>
 </div>
</div>

<style>
.container {
  font-size: 350%;
  color: #f2f2f2;
  margin: 10px 10px;
  display: flex;
  justify-content: space-between;
}

.progress {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.progress-text {
  font-size: 70%;
}

.progress-bar {
  display: flex;
  border: 2px solid black;
  border-radius: 5px;
  width: calc(100% - 10px);
  height: calc(40% - 10px);
  padding: 5px;
  align-items: center;
}

.color-bar {
  display: flex;
  border-radius: 3px;
  height: 100%;
  flex-direction: column;
}

.light-color-bar {
  height: 100%;
  background-image: linear-gradient(15deg,#3ed546,#37b53e);
  animation: shine 0.75s linear infinite;
}

@keyframes shine{
  0% {
    background-image: linear-gradient(15deg,#3ed546,#37b53e);
  }
  25% {
    background-image: linear-gradient(45deg,#3ed546,#37b53e);
  }
  50% {
    background-image: linear-gradient(90deg,#3ed546,#37b53e);
  }
  75% {
    background-image: linear-gradient(45deg,#3ed546,#37b53e);
  }
}

.coin {
  background-image: url(../assets/ipo_coin.gif);
  width: 36px;
  height: 36px;
  background-size: cover;
}

.score {
  display: flex;
  flex-direction: column;
}

.coin-count {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 66%;
}

.level{
  font-weight: bold;
}

@media(max-width:768px){
  .container{
    font-size: 165%;
    margin: 5px 5px;
  }

  .coin {
    width: 18px;
    height: 18px;
  }

  .progress {
    margin-top: 7.5px;
    gap:3px;
  }

  .progress-bar {
    border: 1px solid black;
    border-radius: 3px;
    padding: 2px;
    width: 96%;
    height: 32%;
  }
}
</style>