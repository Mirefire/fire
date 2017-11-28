<template>
    <div class="content-main">
        <template v-if="type == 'doc'">
            <template v-for="(item, index) in data">
                <div class="browse-item">
                    <div class="content-main-list-title">
                        <div class="doc-header-left">
                            <a :href="item.url">{{item.desc}}</a>
                        </div>
                        <div class="doc-header-right"  v-if="route.path == '/index'">
                            <span class="glyphicon glyphicon-trash" @click="deleteHistory(index)"></span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="content-main-list-main" >
                        <div class="left-s list-image" v-if="item.img">
                            <img src="/src/renderer/assets/iamges/pic04.png">
                        </div>
                        <div class="doc-summary">
                            {{item.Summary}}
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="doc-bottom">
                        <p class="bottom-tag">
                            <span v-for="tagItem in item.tag">{{tagItem}}</span>
                        </p>
                        <div class="bottom-time ">{{item.updateTime | formatTime('yyyy-MM-dd')}}</div>
                        <div class="clearfix"></div>
                    </div>

                </div>
            </template>

        </template>
        <template v-if="type == 'atlas'">

        </template>
        <template v-if="type == 'img'">

            <div class="list-images">
                <div class="item" @click="goPictureDetail(dataList)"  v-for="item in dataList" :data-id="item.id" :data-type="item.r_type">
                    <img :src="item.url">
                </div>
            </div>
        </template>
        <template v-if="type =='vf'">
            <div class="videolist" v-for="item in dataList" >
                <div class="list-main-v">
                    <div class="left-s left-img">
                        <img src="/src/renderer/assets/iamges/pic04.png" alt="">
                    </div>
                    <div class="left-s right-text">
                        <div class="video-title-name">{{item.title}}</div>
                        <div class="video-comtent-name" v-html="item.summary">

                        </div>
                        <!--<div class="video-label">-->
                            <!--<span>z中国</span>-->
                            <!--<span>z中国</span>-->
                            <!--<span>z中国</span>-->
                        <!--</div>-->
                        <div class="video-bottom-name">
                            <div class="bottom-bit">
                                <button @click="goVideoDetail(item)">
                                    <span class="glyphicon glyphicon-play-circle"></span>立即播放
                                </button>
                            </div>
                            <div class="video-date-name">
                                更新日期:{{item.updateTime | formatTime('yyyy-MM-dd')}} &nbsp;&nbsp;&nbsp;&nbsp; 视频时长:{{item.duration}}分
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>

        </template>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
      name:'searchItem',
      data(){
        return {
            data:null
        }
      },
      computed:{
        ...mapState([
          'route'
        ])
      },
      mounted:function(){
        this.data = this.dataList;
      },
      methods:{
        deleteHistory(index){
          this.data.splice(index,1);
        },
        goVideoDetail(item){
            this.$store.commit('SET_CURRENT_DETAIL', item);
            this.$router.push({path:'/videoDetail'})
        },
        goPictureDetail(dataList){
          console.log(dataList);
          this.$store.commit('SET_CURRENT_DETAIL', dataList);
          this.$router.push({path:'/pictureDetail'})
        }
      },
      props:{
        type:{
            type:String,
            default:'doc'
        },
        dataList:Array
      },
      components:{

      }
    }
</script>

<style>

    /**doc style**/
    .browse-item{
        border-bottom: 1px solid #f1f1f1;
    }
    .content-main-list-title{
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    .doc-header-left{
        width: 80%;
        font-size: 16px;
        color: #00001c;
        height: 50px;
        line-height: 50px;
        padding-left:24px;
        float: left;
    }
    .doc-header-right{
        float: right;
        width: 10%;
        text-align: center;
    }
    .doc-header-right span{
        cursor: pointer;
    }


    .doc-summary{
        float: left;
        padding-left:24px;
        width: 578px;
        overflow: hidden;
    }
    .doc-bottom{
        padding-left: 24px;
        margin: 12px 0 24px;
    }
    .bottom-tag{
        float: left;
        width: 70%;
    }
    .bottom-tag:after{
        clear: both;
        content: "";
        display: block;
    }
    .bottom-tag span{
        padding:0 8px;
        display: inline-block;
        margin-right: 16px;
        border:1px solid #1895ff;
        text-align: center;
        color: #1895ff;
    }
    .bottom-time{
        width: 25%;
        float: right;
        text-align: center;
    }

    .history-bar-right span{
        cursor: pointer;
    }

    a:hover{
        text-decoration: underline;
        color:#1893fc;
    }
    /**img**/
    .list-view{
        margin: 0 24px;
    }
    .list-images {
        -moz-column-count: 4; /* Firefox */
        -webkit-column-count: 4; /* Safari 和 Chrome */
        column-count: 4;
        -moz-column-gap: 0.1em;
        -webkit-column-gap: 0.1em;
        column-gap: 0.1em;
    }
    .list-images .item {
        padding: 3px;
        margin: 0;
        -moz-page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        cursor: pointer;
        /* border: 1px solid #000; */
    }
    .list-images .item img {
        width: 100%;
    }

    /** video **/
    .videolist{
        height: 254px;
        padding: 24px 0;
        border-bottom: 1px solid #CCC;
    }

    .left-img{
        width: 154px;
        height: 206px;
    }
    .right-text{
        width: 600px;
        margin-left: 42px;
        height: 206px;
        position: relative;
    }
    .video-title-name {
        font-size: 18px;
        color: #00001c;
        margin-top: 6px;
        margin-bottom: 16px;
    }
    .video-comtent-name{
        font-size: 12px;
        color: #555555;
    }
    .video-label{
        width: 100%;
        margin-top: 12px;
    }
    .video-label span{
        margin:0 8px;
    }
    .left-img img{
        width: 100%;
        height: 100%;
    }
    .bottom-bit{
        float: left;
    }
    .bottom-bit button{
        height: 40px;
        width: 128px;
        color: #ffffff;
        font-size: 18px;
        background: #1895ff;
        border: none;
        line-height: 40px;

    }
    .bottom-bit button span{
        font-size: 22px;
        vertical-align: text-bottom;
        margin-right: 4px;
    }
    .video-bottom-name{
        position: absolute;
        bottom:0;
        left: 0;
        width: 100%;
    }
    .video-date-name{
        float: left;
        height: 40px;
        line-height: 40px;
        text-align: right;
        width: 416px;
        font-size: 12px;
        color: #555555;
    }
    .demo {
        height: 40px;
        width: 100%;
        line-height: 40px;
        margin: 20px;
    }


</style>