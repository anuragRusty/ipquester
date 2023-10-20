<script>
    import { fade } from "svelte/transition";

    let levels = Math.floor(Math.random()*20);
    let coins = Math.floor(Math.random()*10000);
    let progress = Math.floor(Math.random()*100);
</script>

<div class="container" in:fade>
  <div class="progress box">
    <div class="progress-bar">
      <div class="color-bar" style="width:{progress}%;">
        <div class="light-color-bar"></div>
        <div class="dark-color-bar"></div>
      </div>
    </div>
    <div class="progress-text">PROGRESS {progress}%</div>
  </div>  
  <div class="level">LEVEL {levels}</div>
  <div class="score">
    <div class="score-count">0000000</div>
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
  height: 70%;
  background-color: #3ed546;
}

.dark-color-bar {
  height: 30%;
  background-color: #37b53e;
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

@media(max-width:768px){
  .container{
    font-size: 160%;
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
    width: 90%;
    height: 28%;
    padding: 3px;
  }
}
</style>