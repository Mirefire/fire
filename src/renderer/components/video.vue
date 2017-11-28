<template>
  <div class="main-comtent">
        <div class="comtent-main video-main">  
            <div class="videolist" >
                <router-link to="/root/vidDetall">
                <div class="list-main-v">
                    <div class="left-s left-img">
                        <img src="/src/renderer/assets/iamges/pic04.png" alt="">
                    </div>
                     <div class="left-s right-text">
                         <div class="video-title-name">坦克世界网路，各国主站坦克战力分析———xx网站</div>
                         <div class="video-comtent-name">
                             ZTZ-99式主战坦克，又称99式，工程代号WZ-123    ZTZ-99式主战坦克，又称99式，工程代号WZ-123，网络上流传的98式坦克实际就是99式坦克的样车9910型，99式坦克是中国人民解放军最新的主战坦克。与另一款较新的主战坦克96式相比，
                         </div>
                         <div class="video-label">
                             <span>z中国</span>
                             <span>z中国</span>
                             <span>z中国</span>
                         </div>
                         <div class="video-bottom-name">
                             <div class="bottom-bit">
                                 <button>
                                   <span class="glyphicon glyphicon-play-circle"></span>立即播放
                                 </button>
                             </div>
                             <div class="video-date-name">
                                  上传日期:2015-10-20 &nbsp;&nbsp;&nbsp;&nbsp; 视频时长:13:10
                             </div>
                         </div>
                     </div>
                </div>
                </router-link>
            </div>
            <div class="border-bottom"></div>
             <div class="videolist">
                <div class="list-main-v">
                    <div class="left-s left-img">
                        <img src="/src/renderer/assets/iamges/pic04.png" alt="">
                    </div>
                     <div class="left-s right-text">
                         <div class="video-title-name">坦克世界网路，各国主站坦克战力分析———xx网站</div>
                         <div class="video-comtent-name">
                             ZTZ-99式主战坦克，又称99式，工程代号WZ-123    ZTZ-99式主战坦克，又称99式，工程代号WZ-123，网络上流传的98式坦克实际就是99式坦克的样车9910型，99式坦克是中国人民解放军最新的主战坦克。与另一款较新的主战坦克96式相比，
                         </div>
                         <div class="video-label">
                             <span>z中国</span>
                             <span>z中国</span>
                             <span>z中国</span>
                         </div>
                         <div class="video-bottom-name">
                             <div class="bottom-bit">
                                 <button>
                                   <span class="glyphicon glyphicon-play-circle"></span>立即播放
                                 </button>
                             </div>
                             <div class="video-date-name">
                                  上传日期:2015-10-20 &nbsp;&nbsp;&nbsp;&nbsp; 视频时长:13:10
                             </div>
                         </div>
                     </div>
                </div>
            </div>
           
            <div class="border-bottom"></div>
           <div class="main-bottom">
                    <span class="main-bottom-title left-s">相关搜索:</span>
                    <span class="span-p">中国坦克</span>
                    <span class="span-p">中国坦克</span>
                    <span class="span-p">中国坦克</span>
                </div>
           
              <div id="demo" class="demo"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created:function(){
    
  },
  methods: {
      
  },
  mounted: function () {
   
    layui.use(['laypage', 'layer'], function () {
      var laypage = layui.laypage,
        layer = layui.layer

      // 总页数低于页码总数
      laypage.render({
        elem: 'demo',
        count: 50 // 数据总数
      })
    })
  }
}
</script>

<style scoped>
.video-main{
    margin-left: 30px;
    margin-right: 30px;
}

.videolist{
    height: 206px;
}
 .left-img{
     width: 154px;
     height: 206px;
 }
 .right-text{
     width: 644px;
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
     padding: 3px 5px;
     border: 1px solid #666666;
     color: #666666;
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
    display: black;
    font-size: 22px;
    vertical-align: text-bottom;
    margin-right: 4px;
 }
 .video-bottom-name{
     position: absolute;
     bottom:0;
     left: 0;
     widows: 100%;
 }
 .video-date-name{
  float: left;
  height: 40px;
  line-height: 63px;
  text-align: right;
  width: 516px;
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

