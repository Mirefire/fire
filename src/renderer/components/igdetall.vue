<template>
  <div class="main-comtent">
        <div class="comtent-main img-detall-main">  
             <div class="mod18Box">
                <div class="mod18">
                    <span id="prev" class="btn prev"></span>
                    <span id="next" class="btn next"></span>
                    <span id="prevTop" class="btn prev"></span>
                    <span id="nextTop" class="btn next"></span>
                    <div id="picBox" class="picBox">
                        <ul class="cf">
                            <li>
                                <a target="_blank"><img  src="/src/renderer/assets/iamges/pic508348px.png" alt="" /></a>
                                <div class="bostmo">
                                 <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                </div>
                            </li>
                            <li>
                                <a target="_blank" ><img  src="/src/renderer/assets/images/02.jpg" alt="" /></a>
                                <div class="bostmo">
                                <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                </div>
                            </li>
                            <li>
                                <a  target="_blank"><img  src="/src/renderer/assets/images/03.jpg" alt="" /></a>
                                <div class="bostmo">
                                    <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                </div> 
                            </li>
                            <li>
                                <a target="_blank"><img  src="/src/renderer/assets/images/04.jpg" alt="" /></a>
                                <div class="bostmo">
                                   <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                    </div> 
                            </li>
                            <li>
                                <a  target="_blank"><img  src="/src/renderer/assets/images/05.jpg" alt="" /></a>
                                <div class="bostmo">
                                  <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                    </div> 
                            </li>
                            
                            <li>
                                <a target="_blank" ><img  src="/src/renderer/assets/images/02.jpg" alt="" /></a>
                                <div class="bostmo">
                                    <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                </div>
                            </li>
                            <li>
                                <a  target="_blank"><img  src="/src/renderer/assets/images/03.jpg" alt="" /></a>
                                <div class="bostmo">
                                      <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                    </div> 
                            </li>
                            <li>
                                <a target="_blank"><img  src="/src/renderer/assets/images/04.jpg" alt="" /></a>
                                <div class="bostmo">
                                    <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                    </div> 
                            </li>
                            <li>
                                <a  target="_blank"><img  src="/src/renderer/assets/images/05.jpg" alt="" /></a>
                                <div class="bostmo">
                                    <span class="name-title">坦克时间大宋的红啊是的啊是的啦是</span> <span class="date-ime">上传日期:2015-10-20</span> 
                                    </div> 
                            </li>
                          
                        </ul>
                    </div>
                    
                    <div id="listBox" class="listBox">
                        <ul class="cf">
                            <li class="on"><i class="arr2"></i><img  src="/static//src/renderer/assets/iamges/pic508348px.png" alt="心壁纸" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/02.jpg" alt="logo设计" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/03.jpg" alt="猎豹logo" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/04.jpg" alt="CSS3按钮" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/05.jpg" alt="CSS3相册" /></li>
                             
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/02.jpg" alt="logo设计" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/03.jpg" alt="猎豹logo" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/04.jpg" alt="CSS3按钮" /></li>
                            <li><i class="arr2"></i><img  src="/src/renderer/assets/images/05.jpg" alt="CSS3相册" /></li>                          
                        </ul>
                    </div>
                </div>
                </div>
            <div class="border-bottom"></div>
              <div class="main-bottom imgve0">
            <span class="main-bottom-title left-s">相关搜索:</span>
            <span class="span-p">中国坦克</span>
            <span class="span-p">中国坦克</span>
            <span class="span-p">中国坦克</span>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted: function () {
    function G (s) {
      return document.getElementById(s)
    }

    function getStyle (obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr]
      } else {
        return getComputedStyle(obj, false)[attr]
      }
    }

    function Animate (obj, json) {
      if (obj.timer) {
        clearInterval(obj.timer)
      }
      obj.timer = setInterval(function () {
        for (var attr in json) {
          var iCur = parseInt(getStyle(obj, attr))
          iCur = iCur || 0
          var iSpeed = (json[attr] - iCur) / 5
          iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
          obj.style[attr] = iCur + iSpeed + 'px'
          if (iCur == json[attr]) {
            clearInterval(obj.timer)
          }
        }
      }, 30)
    }

    var oPic = G('picBox')
    var oList = G('listBox')

    var oPrev = G('prev')
    var oNext = G('next')
    var oPrevTop = G('prevTop')
    var oNextTop = G('nextTop')

    var oPicLi = oPic.getElementsByTagName('li')
    var oListLi = oList.getElementsByTagName('li')
    var len1 = oPicLi.length
    var len2 = oListLi.length

    var oPicUl = oPic.getElementsByTagName('ul')[0]
    var oListUl = oList.getElementsByTagName('ul')[0]
    var w1 = oPicLi[0].offsetWidth
    var w2 = oListLi[0].offsetWidth

    oPicUl.style.width = w1 * len1 + 'px'
    oListUl.style.width = w2 * len2 + 'px'

    var index = 0

    var num = 5
    var num2 = Math.ceil(num / 2)

    function Change () {
      Animate(oPicUl, { left: -index * w1 })

      if (index < num2) {
        Animate(oListUl, { left: 0 })
      } else if (index + num2 <= len2) {
        Animate(oListUl, { left: -(index - num2 + 1) * w2 })
      } else {
        Animate(oListUl, { left: -(len2 - num) * w2 })
      }

      for (var i = 0; i < len2; i++) {
        oListLi[i].className = ''
        if (i == index) {
          oListLi[i].className = 'on'
        }
      }
    }

    oNextTop.onclick = oNext.onclick = function () {
      index++
      index = index == len2 ? 0 : index
      Change()
    }

    oPrevTop.onclick = oPrev.onclick = function () {
      index--
      index = index == -1 ? len2 - 1 : index
      Change()
    }

    for (var i = 0; i < len2; i++) {
      oListLi[i].index = i
      oListLi[i].onclick = function () {
        index = this.index
        Change()
      }
    }
  }
}
</script>
<style scoped>

.mod18Box {
  padding: 10px;
  /* border: 1px solid #ccc; */
  
  background: #fff;
  /* box-shadow: 0px 1px 5px #cccccc; */
}
.mod18 {
  width: 100%;
  position: relative;

}
.mod18 .btn {
  position: absolute;
  width: 15px;
  height: 10px;
  top: 336px;
  cursor: pointer;
  z-index: 99;
  font-size: 50px;
  text-align: center;
  
  font-weight: bold;
}
.mod18 .prev {
  left: 0;
  /* background: url('/static/images/prevBtn.png') no-repeat; */
}
.mod18 #prevTop,
.mod18 #nextTop {
  top: 140px;
  width: 46px;
  height: 40px;
  text-align: center;
}
.mod18 #prevTop {
  background: url('/src/renderer/assets/iamges/left-02.png')no-repeat;
  background-position: center;
  background-size:  10px 18px;
}
.mod18 #nextTop {
  background: url('/src/renderer/assets/iamges/right-02.png')no-repeat;
  background-position: center;
  background-size:  10px 18px;
}
.mod18 .next {
  right: 0;
  /* background: url('/static/images/nextBtn.png') no-repeat; */
}
.mod18 li {
  float: left;
}

.mod18 .cf li {
  position: relative;
  color: #fff;
 
}
.mod18 .cf a {
  display: block;
  width: 508px;
  height: 350px;
  position: absolute;
  color: #fff;
}
.mod18 .cf li .bostmo {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px 10px;
  line-height: 22px;
  font-size: 12px;
  text-align: left;
  background: rgba(0, 0, 0, 0.6);
  filter: progid:DXImageTransform.Microsoft.gradient(
      GradientType = 0,
      startColorstr = "#60000000",
      endColorstr = "#60000000"
    );
}
.mod18 .cf li .bostmo .name-title{
    float: left;
}
.mod18 .cf li .bostmo .date-ime{
    /* padding-right: 10px; */
    float: right;
}
.mod18 .picBox {
   width: 508px;
  height: 350px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.mod18 .picBox ul {
  height: 330px;
  position: absolute;
}
.mod18 .picBox li {
  width: 508px;
  height: 350px;
}
.mod18 .listBox {
  margin-top: 30px;
  height: 50px;
  position:relative;
  padding: 6px 0 0px;
  overflow: hidden;
}
.mod18 .listBox ul {
    /* width: 900px !important; */
    height: 50px;
    line-height: 50px;
    position: absolute;
}
.mod18 .listBox li {
  width: 54px;
  padding-right:2px; 
  height: 50px;
  cursor: pointer;
  position: relative;
}
.mod18 .listBox li i {
  display: none;
}
.mod18 .listBox li a {
  display: block;
  width: 50px;
  height: 50px;
}
.mod18 .listBox li img {

  width: 50px;
  height: 50px;
}
.mod18 .listBox .on img {
  width: 50px;
  height: 50px;
  border: 2px solid #ff6600;
}
.mod18 .listBox .on i {
  display: block;
}
.imgve0{
    margin-bottom:20px;
    }
</style>
