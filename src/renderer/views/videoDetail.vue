<template>
    <div class="main-content">
        <div class="comtent-main video-detall-main">
            <div class="video-detall">
                <video width="100%" controls height="100%" src="/src/renderer/assets/viedo/banner.mp4" ></video>
            </div>
            <div class="detall-txt">
                <div class="detall-txt-title" v-html="videoInfo.title"></div>
                <div class="detall-txt-comten" v-html="videoInfo.summary">

                </div>
                <div class="detall-span-bot">
                    <!--<span class="ss">中国</span>-->
                    <!--<span class="ss">中国</span>-->
                    <!--<span class="ss">中国</span>-->
                    <span class="std">
                        上传日期:{{videoInfo.updateTime}} &nbsp;&nbsp;&nbsp;&nbsp; 视频时长:{{videoInfo.duration}}分
                    </span>
                </div>
            </div>
            <div class="boder-clear"></div>
            <div class="view-dies">
            </div>



        </div>

    </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name:'videoDetail',
    data(){
      return {

      }
    },
    computed:{
      ...mapState({
        videoInfo : state => state.search.currentDetail
      })
    }
  }
</script>
<style scoped>
    .main-content{
        margin-top:10%;
    }
    .video-detall-main{
        width: 846px;
        margin: 0 auto;
    }
    .video-detall{
        height: 468px;
        width: 846px;

    }
    .detall-txt{
        width: 100%;
    }
    .detall-txt-title{
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 15px;
    }
    .detall-txt-comten{
        font-size: 12px;
        margin-bottom: 12px;
    }
    .detall-span-bot{

    }
    .detall-span-bot .ss{
        margin-right: 16px;
        float: left;
    }
    .detall-span-bot .std{
        float: right;
    }
    .boder-clear{
        clear: both;
    }
    .view-dies{
        height: 2px;
        width: 100%;
        background: #f1f1f1;
        margin-top:20px;
        margin-bottom: 24px;
    }
    .video0{
        margin-bottom: 20px;
    }
</style>
