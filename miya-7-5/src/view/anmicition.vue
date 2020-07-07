<template>
<div class="anmicition-container">
  <div class="back">
  </div>
  <div class="translate">
    <!--<img src="../assets/img-1.jpg">-->
  </div>
  <div class="comment">请使用纵向屏幕观看</div>
</div>
</template>

<script>
    export default {
        name: "anmicition",
      data(){
          return{
            isLandscape:null,
          }
      },
      methods:{
        isPortrait(){
          if (window.orientation === 180 || window.orientation === 0) {
            this.isLandscape = false;
          }
          if (window.orientation === 90 || window.orientation === -90 ){
            this.isLandscape = true;
          }
        }
      },
      mounted(){
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.isPortrait(), false);
      },
      destroyed(){
        window.removeEventListener("onorientationchange" in window ? "orientationchange" : "resize",this.isPortrait())
      },
      created(){

      }
    }
</script>

<style scoped>
  .translate{
    width:15rem;
    height:15rem;
    background: aqua;
    border-radius: 100%;
    background: url(../assets/img-1.jpg);
    background-size: 100% 100%;
    animation:translate 4s linear infinite;
    margin: 3rem auto;
  }
  .comment{
    text-align: center;
  }
  @media screen and (min-width:1281px) and (max-width:1920px) and (orientation:portrait) {
    html { font-size: 15px; }
  }
  @media screen and (orientation: portrait) {
    /*竖屏 css*/
    .back{
      height:15rem;
      width:100%;
      background: black;
      opacity: 0.5;
      position:absolute;
    }
  }
  @media screen and (orientation: landscape) {
    .back{
      display: none;
    }
  }

  @keyframes translate{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
</style>
