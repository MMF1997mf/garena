<template>
<div class="demo-container">
  <div class="title">
     <div class="header">
       <span v-for="item in buttonList" :class="{'bg-color':type === item.type}" @click="handleCilck(item.type)">{{item.name}}</span>
     </div>
  </div>
  <div class="center">
    <div class="position">
      <div class="div2">CHARACTER
        <div class="div1"></div>
        <div class="div3"></div>
      </div>
    </div>
     <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="special">
      <div class="img small1 small small2"></div>
      <div class="img small2 small" ></div>
      <div class="img small1 small"></div>
      <div class="img small "></div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "demo",
      data(){
          return{
            buttonList:[
              {
                name:'HOME',
                type:'home'
              },
              {
                name:'HOME',
                type:'home'
              },
              {
                name:'FREE FILE',
                type:'free'
              }
            ],
            type:'free',
          }
      },
      methods:{
        handleCilck(type){
          this.type = type;
          this.getData();
        },
        getQueryString(queryObject, isFirstQuery) {
            if (queryObject) {
              let queryString = "";
              for (let key in queryObject) {
                if (queryObject[key] !== ''
                  && queryObject[key] !== null
                  && queryObject[key] !== undefined) {
                  if (isFirstQuery) {
                    queryString += key + '=' + queryObject[key];
                    isFirstQuery = false;
                  } else {
                    queryString += "&" + key + '=' + queryObject[key];
                  }
                }
              }
              return queryString;
            }
                return "";
         },
       getData(){
          let queryString = this.getQueryString({type:this.type},true);
          axios.get(`url?${queryString}`).then(response=>{
            if(response && response.status == '200'){
            console.log(response);
          }
        })
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped >
  .demo-container{
    background: black;
  }
  .position{
    position: absolute;
    top:-1.5rem;
    display: flex;
  }
  .div1{
        transform:rotate(45deg);
        left:-1rem;
        top:0.5rem;
        border-radius: .2rem;
      }
  .div3{
    transform:rotate(225deg);
    right:-1rem;
    top:0.5rem;
  }
  .div2{
    color: white;
    line-height: 3rem;
    position: relative;
    background: rgb(200,214,228,0.7);
  }
  .div1,.div3{
    width:0;
    height:0;
    position: absolute;
    border:1rem solid;
    border-color:transparent transparent rgb(200,214,228,0.7) rgb(200,214,228,0.7) ;
    border-radius: .2rem;
  }
  .special{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height:20rem;
    width:20rem;
    margin:2rem;
  }
  .special>.small{
    height:9rem;
    width:9rem;
    margin:0;
  }
  .special>.small1{
    margin-right:2rem;
  }
  .special>.small2{
    margin-bottom:2rem;
  }
  .center{
    position: relative;
    margin-top:4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding:2rem;
    border-top:1px solid rgb(242,242,242,0.3);
  }
  .img{
    height:20rem;
    width:20rem;
    background: url("../assets/img-1.jpg");
    background-size: 100% 100%;
    margin:2rem;
  }
.title{
  height:8rem;
  background-size: 100% 100%;
  background: url("../assets/bg.png");
}
.bg-color{
  color:rgb(255,165,0);
}
.header{
  border-left:.5rem solid rgb(255,165,0);
  border-right:.5rem solid rgb(255,165,0);
  height:2rem;
  line-height: 2rem;
  color:#fff;
  text-align: left;
  padding-left:1rem;
  background: rgb(242,242,242,0.3);

}
 .header>span{
  margin-right:2rem;
  cursor: pointer;
}

@media screen and (min-width:1281px) and (max-width:1920px) and (orientation:portrait) {
  html { font-size: 15px; }
}
  @media screen and (max-width:767px) and (orientation:portrait) {
    .special>.small{
      height:6rem;
      width:6rem;
      margin:0;
    }
    .special>.small1{
      margin-right:2rem;
    }
    .special>.small2{
      margin-bottom:-4rem;
    }
  }
</style>
