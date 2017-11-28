<!--历史搜索-->
<template>
    <div class="history-content-header">
        <div class="history-bar">
            <span class="title"> 搜索历史:</span>
            <span class="history-item" v-for="item in historyKey" @click="goToHistory($event)">
                    {{item.keyword}}
            </span>
        </div>
        <div class="history-bar-right">
            <span class="glyphicon glyphicon-trash" @click="deleteHistory"></span>
            <!--<span class="glyphicon glyphicon-grain"></span>-->
            <!--<span class="glyphicon glyphicon-align-justify"></span>-->
        </div>
    </div>
</template>

<script>
    export default {
      name:'searchHistory',
      data(){
        return {
          historyKey:[]
        }
      },
      methods:{
        deleteHistory: function () {
          let vue = this;
          layer.confirm('确定情况搜索历史吗？', {
            title: ['提示', 'font-size:18px;', 'background:#1895ff;'],
            btn: ['确定', '取消'] // 按钮
          }, function () {
            vue.historyKey = [];
          }, function () {
            layer.msg('已取消')
          })
        },
        goToHistory(event){
            console.log(event.target.innerText);
            //TODO 跳转到搜索结果页面
        }
      },
      created:function(){
        //加载历史记录
        let vue = this;
        this.$http.get('/military/history').then(response => {
          this.historyKey = response.data
        })
      }
    }
</script>

<style>
    .history-content-header{
        height: 50px;
        position: relative;
        width: 100%;
    }
    .history-bar{
        width: 85%;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        padding-left:24px;
        float:left;

    }
    .history-bar .title{
        float: left;
        color: #1893fc;
    }
    .history-item{
        margin: 0 5px;
        cursor: pointer;
    }

    .history-bar-right{
        width: 10%;
        height: 100%;
        float: right;
        line-height: 50px;
        text-align: center;
    }

</style>