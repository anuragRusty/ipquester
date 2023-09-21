<script>
    let levels = Math.floor(Math.random()*20);
    let coins = Math.floor(Math.random()*10000);
    let progress = Math.floor(Math.random()*100);
</script>

<div class="container">
  <div class="progress box">
    <div class="progress-bar">
      <div class="color-bar" style="width:{progress}%;">
        <div class="light-color-bar"></div>
        <div class="dark-color-bar"></div>
      </div>
    </div>
    <div class="progress-text">PROGRESS {progress}%</div>
  </div>  
  <div class="level box">LEVEL {levels}</div>
  <div class="score">
    <div class="coin box"></div>
    <div class="coin-text">x{coins}</div>
 </div>
</div>

<style>
    .container{
        font-size:60px;
        color:#f2f2f2;
        margin-left: 35px;
        margin-right: 35px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }

    .box{
        width: calc(33% - 35px);
    }

    .progress{
        display: flex;
        flex-direction: column;
        padding-top: 25px;
    }
   
    .progress-text{
        font-size: 35px;
    }

    .progress-bar{
      border: solid 2px black;
      border-radius: 5px;
      width: 256px;
      height: 32px;
      padding: 5px;
    }

    .color-bar{
      display: flex;
      border-radius: 3px;
      height: 100%;
      flex-direction: column;
    }

    .light-color-bar{
        height:70%;
        background-color: #3ed546;
    }

    .dark-color-bar{
        height:30%;
        background-color: #37b53e;
    }

    .score,.level,.progress-bar   {
        display: flex;
        align-items: center;
    }
    
    .coin{
        background-image: url(../assets/ipo_coin.gif);
        width:48px;
        height:48px;
    }
    
</style>