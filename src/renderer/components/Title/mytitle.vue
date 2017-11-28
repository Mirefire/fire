<template>
  <div id="mytitle">
       <div class="imgas">
           <img src="/src/renderer/assets/iamges/login_img.png" alt="">
       </div>
       <div class="retrued" @click="back">
           <!-- <img src="/src/renderer/assets/iamges/backto.png" alt=""> -->
           <i class="glyphicon glyphicon-menu-left"></i>
       </div>
        <Titlebtn type="min" class="min glyphicon glyphicon-minus"/>
        <Titlebtn type="max" class="max glyphicon glyphicon-fullscreen"/>
        <Titlebtn type="close" class="cloe glyphicon glyphicon-remove" />
    </div>
</template>
<script>
 import Titlebtn from '@/components/Title/title';
    export default {
        components: {
            Titlebtn
        },
        methods:{
            back:function(){
                window.history.back();
            }
        }
    }
</script>
<style scoped>
  #mytitle {
    position: fixed;
    width: 100%;
    margin-bottom: 53px;
    height: 53px;
    background-color:#fff;
    -webkit-app-region: drag;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #ccc; 
}
.imgas{
    position: relative;
    left: 10px;
    height: 53px;
    line-height:53px;
    float: left;
}
.retrued{
    position: absolute;
    right: 200px;
    height: 53px;
    line-height:55px;
    -webkit-app-region: no-drag;
    /* float: left; */
}


/* .min{
     background: url('/src/renderer/assets/iamges/min.png') no-repeat;
     background-position: center;
     background-size: 24px 24px;
}
.max{
   background: url('/src/renderer/assets/iamges/max.png') no-repeat;
    background-position: center;
    background-size: 24px 24px;

}
.close{
  background: url('/src/renderer/assets/iamges/cs.png') no-repeat;
  background-position: center;
  background-size: 24px 24px;
} */
</style>
