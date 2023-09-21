<script>
let info_str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id cursus dolor. Nullam sit amet auctor dolor, at ultrices justo. Aliquam tristique magna id mauris auctor, quis sagittis urna mollis. Praesent a facilisis metus, non placerat justo. Nunc non ante dui. Nulla facilisi. Nunc aliquam sodales tincidunt. Aliquam in nisl magna. Vestibulum non sollicitudin metus, eu lobortis mi.
    Fusce porttitor vestibulum neque lobortis tincidunt. Vestibulum euismod, orci at varius vestibulum, risus turpis gravida mi, sit amet feugiat est lectus eu lacus. Ut a nisl vitae nibh porta luctus eget vel diam. Etiam tincidunt velit ut euismod interdum. Ut sollicitudin lorem quam, nec laoreet neque ornare vitae. Phasellus tempor tortor id neque dictum placerat. Pellentesque neque massa, tincidunt et pharetra id, bibendum vitae metus.
    Nullam quis pulvinar elit. Sed malesuada leo lacinia, malesuada libero eget, mollis ligula. Quisque facilisis lectus non dolor congue tincidunt. Cras elit massa, tempus nec dui volutpat, auctor congue elit. Morbi mollis lobortis ullamcorper. Aliquam maximus sapien nisl, vel molestie neque lobortis ac. Integer semper porta ipsum, eu lacinia nisi sodales nec. Sed pulvinar quam non lacus porta, varius tempus felis imperdiet.
    Nullam vehicula cursus laoreet. Curabitur ligula lorem, facilisis et risus ac, sollicitudin vehicula augue. Integer dignissim tellus non sapien gravida malesuada. Duis gravida feugiat urna non accumsan. In varius pulvinar mauris, ut euismod nibh aliquam nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean mollis varius nibh sed convallis. Duis laoreet risus quam, non fermentum arcu hendrerit suscipit. Proin odio eros, semper nec mauris nec, viverra viverra augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sed imperdiet nibh. Ut gravida dui a est fringilla hendrerit. Curabitur ultricies sit amet erat sit amet blandit. Sed ut iaculis sem, ac varius nisl.
    Duis scelerisque metus sollicitudin, accumsan dolor et, volutpat metus. Morbi facilisis vulputate tellus nec faucibus. Nulla in venenatis ex. Nunc arcu orci, consectetur eget porta non, bibendum vel arcu. Integer vel risus vestibulum, euismod quam eget, laoreet augue. Quisque nec nunc pretium, consequat enim vel, dictum ex. Nam ultricies neque sed mattis accumsan. Integer a arcu sapien. Phasellus scelerisque `
</script>

<div class="container">
<div class="objective">
    <h1 class="head text">OBJECTIVE</h1>
    <div class="info text">
     {info_str}
    </div>
 </div>
</div>

<style>
  .container{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .objective{
    border: solid 2px black;
    border-radius: 10px;
    width: 66%;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(242, 242, 242, 0.6);
    padding: 15px;
  }
  
  .info {
  width: 100%;
  height: auto;
  animation: typing 2s, blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>

