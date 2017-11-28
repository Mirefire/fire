<template>
    <div class="main-content">
        <div class="mod18Box">
            <div class="mod18">
                <span id="prev" class="btn prev"></span>
                <span id="next" class="btn next"></span>
                <span id="prevTop" class="btn prev"></span>
                <span id="nextTop" class="btn next"></span>
                <div id="picBox" class="picBox">
                    <ul class="cf">
                        <li v-for="picture in pictureDetail">
                            <a href="" target="_blank">
                                <img :src="picture.url" alt="">
                            </a>
                            <div class="bostmo">
                                <span class="name-title" v-html="picture.title"></span>
                                <span class="date-ime">上传日期:{{picture.updateTime | formatTime('yyyy-MM-dd')}}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="listBox" class="listBox">
                    <ul class="cf">
                        <li :class="{on:now == index}" v-for="(picture,index) in pictureDetail">
                            <img  :src="picture.url" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="border-bottom"></div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    name:'pictureDetail',
    data () {
      return {
        now:0,
      }
    },
    methods: {

    },
    computed:{
      ...mapState({
        pictureDetail: state => state.search.currentDetail
      })
    },
    mounted: function () {
      let vue = this;
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
        vue.now = index;
        Change()
      };

      oPrevTop.onclick = oPrev.onclick = function () {
        index--
        index = index == -1 ? len2 - 1 : index
        vue.now = index;
        Change()
      };

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
    .main-content{
        margin-top: 10%;
    }

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
        height: 350px;
        position: absolute;
    }
    .mod18 .picBox li {
        width: 508px;
        height: 350px;
    }
    .mod18 .listBox {
        margin-top: 30px;
        height: 60px;
        position:relative;
        padding: 6px 0 0px;
        overflow: hidden;
    }
    .mod18 .listBox ul {
        /* width: 900px !important; */
        height: 54px;
        line-height: 50px;
        position: absolute;
    }
    .mod18 .listBox li {
        width: 50px;
        margin-right:4px;
        height: 50px;
        cursor: pointer;
        position: relative;
    }


    .mod18 .listBox li img {

        width: 50px;
        height: 50px;
    }
    .mod18 .listBox li.on  {
        width: 54px;
        height: 54px;
        border: 2px solid #ff6600;
    }
    .mod18 .listBox .on i {
        display: block;
    }
    .imgve0{
        margin-bottom:20px;
    }
</style>
