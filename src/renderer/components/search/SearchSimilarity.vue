<!--相似搜索 -->
<template>
    <div class="content-header">
        <div class="header-main-left">
            <div class="similar-bar">
                <span class="title"> 搜索历史:</span>
                <span class="similar-item" v-for="item in similarList" @click="goToSearch($event)">
                        {{item.keyword}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          similarList:[]
        }
      },
      methods:{
        goToSearch(event){
          console.log(event.target.innerText)
        }
      }
    }
</script>

<style>
    .similar-bar{
        height: 18px;
        line-height: 18px;
        overflow: hidden;
    }
    .similar-item{
        border:1px solid #1893fc;
        color:#1895ff;
        background-color: #ffffff;
    }
</style>