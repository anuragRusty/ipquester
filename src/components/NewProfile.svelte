<script>
    import { fade } from "svelte/transition";
    
    let userName = "";
    let playerId = "";
    let age;
    let gender = ""; //male,female

    let new_password = "";
    let confirm_password = "";

    let msg = "player ID already exist!";
</script>
    
    <div class="container" in:fade>
     <div class="inputs">
      <div class="label">ENTER NAME</div>
      <input class="input" type="text" bind:value={userName}>
      <div class="label">ENTER PLAYER ID</div>
      <input class="input" type="text" bind:value={playerId}>
      <div class="label">ENTER AGE</div>
      <input class="input" type="number" min="1" max="100" bind:value={age}>
      <div class="label">SELECT GENDER</div>
      <select class="input" name="gender" bind:value={gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
      <div class="label">ENTER PASSWORD</div>
      <input class="input" type="password" bind:value={new_password}>
      <div class="label">CONFIRM PASSWORD</div>
      <input class="input" type="password" bind:value={confirm_password}>
      <button class="option">CREATE PROFILE</button>
      <div class="msg-box">{msg}</div>
     </div>
    </div>
    
    <style>
     .container{
        width: 85%;
        height: 85%;
        display: flex;
        justify-content: center;
     }
    
     .inputs{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:10px;
     }
    
     .option{
        margin-top: 20px;
        font-size: 220%;
        color: black;
        border: 1px solid rgba(0,0,0,0);
        border-radius:20px;
    }
    
    .label{
        font-size: larger;
        color:black;
    }
    
    .option:hover{
        border: 2px solid black;
        scale: 1.025;
    }
    
    .input{
        background-color: transparent;
        border-radius: 5px;
        font-size: 100%;
        font-family: 'VT323';
        border: 2px solid black;
    }

    .msg-box{
        height: 30px;
        font-style: italic;
        color:black;
    }

    @media(max-width:768px){
        .option{
            font-size: 200%;
        }

        .inputs{
            gap: 5px;
        }

        .input{
            font-size: 75%;
        }
    }
    </style>