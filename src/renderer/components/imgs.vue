<template>
   <div class="main-comtent">
            <div class="comtent-main">                 
                <div class="list-view">
                <div class="list-images">
                        <div class="item">
                            <img src="https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg">
                        </div>
                         <div class="item">
                             <img src="https://imgsa.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=03948ea9b4315c60579863bdecd8a076/8326cffc1e178a825a6b5d1cfe03738da977e833.jpg">
                        </div>
                         <div class="item">
                              <img src="https://imgsa.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=3d645bf2d0ca7bcb6976cf7ddf600006/6d81800a19d8bc3efe5f64fb858ba61ea8d345af.jpg">
                        </div>
                         <div class="item">
                            <img src="https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=fbc3501b0a087bf469e15fbb93ba3c49/bf096b63f6246b60ea65dd24e3f81a4c510fa273.jpg">
                        </div>
                          <div class="item">
                            <img src="https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg">
                        </div>
                        <div class="item">
                            <img src="/static/iamges/pic01.png" />
                        </div>
                        <div class="item">
                             <img src="/static/iamges/pic01.png" />
                        </div>
                        <div class="item">
                             <img src="/static/iamges/pic01.png" />
                        </div>
                          <div class="item">
                            <img src="https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg">
                        </div>
                          <div class="item">
                            <img src="https://imgsa.baidu.com/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=9fe1d71697ef76c6c4dff379fc7f969f/b03533fa828ba61ed2efcd184634970a304e5987.jpg">
                        </div>
                          <div class="item">
                             <img src="/src/renderer/assets/iamges/pic01.png" />
                        </div>
                          <div class="item">
                             <img src="/src/renderer/assets/iamges/pic02.png" />
                        </div>
                </div>
                
            </div>   
             <div class="main-bottom">
                    <span class="main-bottom-title left-s">相关搜索:</span>
                    <span class="span-p">中国坦克</span>
                    <span class="span-p">中国坦克</span>
                    <span class="span-p">中国坦克</span>
                </div>
            </div>
            <div id="demo" class="demo"></div>
       </div>
</template>
<script >
export default {
  data () {
    return {}
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
  height: 160px;
  margin: 0;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  /* border: 1px solid #000; */
}
.list-images .item img {
  width: 100%;
}

.demo {
  height: 40px;
  width: 100%;
  line-height: 40px;
  margin: 20px;
}
</style>
