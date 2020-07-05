<template>
<div class="anmicition-container">
  <div class="translate">
    <!--<img src="../assets/img-1.jpg">-->
  </div>
</div>
</template>

<script>
    export default {
        name: "anmicition"
    }
</script>

<style scoped>
  .translate{
    width:400px;
    height: 400px;
    background: aqua;
    border-radius: 100%;
    background: url(../assets/img-1.jpg);
    background-size: 100% 100%;
    animation:translate 4s linear infinite;
    margin: 100px auto;
  }
  @keyframes translate{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
</style>
