<template>
 <div class="per-comtent">
     <div class="imgages">
        <img src="/src/renderer/assets/iamges/login_img.png">
     </div>
     <div class="header-title">
       <div class="header-title-txtx">军事信息搜索演示软件</div>
        </div>
    <div class="seacher-div">
    <input type="text" placeholder="请输入搜索内容" v-model="searchContext" @click="searchPrompt" debounce="300"  v-focus="focusimg"  @blur="bluerd()" @keyup.up="showup()" @keyup.down="showdown()" @keyup.enter="showen()">
     <button class="seacher-btn" @click="search">
     <i class="glyphicon glyphicon-search"></i> 搜索
      </button> 
       <div style="clear: both;"></div>
          <div class="sha-boxs">
         <div class="sha-box-man"  >
           <ul id="listid" v-show="shouwimg" v-on:mouseleave="hiddenDetail()">
              <li v-for="(item, index) in items" v-on:mouseenter="moser(index)">{{item.name}}</li>
           </ul>
       </div>
     </div>
    </div>
    <div class="seacher-main">
       <div class="main-comtent">
            <div class="comtent-header">
                  <div class="header-main-left">
                     <div class="lingf">
                         <span class="lingf-title left-s"> 搜索历史:</span>
                         <span class="left-s lingf-span" v-for="item in historyKey">
                                {{item.keyword}}
                         </span>
                      </div> 
                  </div>
                  <div class="header-main-right">
                    <div class="lingt">
                    <span class="glyphicon glyphicon-trash" @click="trash"></span>
                    <span class="glyphicon glyphicon-option-vertical"></span>
                    <span class="glyphicon glyphicon-menu-hamburger"></span>
                    </div>
                  </div>
            </div>
           <!--浏览历史记录-->
            <div class="comtent-main">
                <div class="comtent-main-list">
                    <div class="comtent-main-list-title">
                            <div class="header-main-left">
                            <div class="lingf Aotitle">
                               世界坦克官网，各国坦克--xxx网                               
                              </div> 
                          </div>
                          <div class="header-main-right">
                            <div class="lingt">
                            <span class="glyphicon glyphicon-trash" @click="trashout"></span>                  
                            </div>
                          </div>
                    </div>            
                     <div class="comtent-main-list-main">
                         <div class="left-s list-image">
                           <img src="/src/renderer/assets/iamges/pic04.png">
                         </div>
                         <div class="left-s list-txt">
                            坦克，现代陆上作战的主要武器，具有直射火力、越野能力和装甲防护力的履带式装甲战斗车辆，是陆地武器中其重要性唯一高于轮式装甲车的存在，主要执行与对方坦克或其他装甲车辆作战，也可以压制、消灭反坦克武器、摧毁工事、歼灭敌方陆上力量。
                         <p class="bottom-span">
                           <span class="">中国</span><span class="">中国</span>                          
                         </p>
                         </div>
                         <div class="sss ">2017-11-01</div>
                     </div>                                       
                </div>
               
                   <div class="comtent-main-list">
                    <div class="comtent-main-list-title">
                            <div class="header-main-left">
                            <div class="lingf Aotitle">
                               世界坦克官网，各国坦克--xxx网                               
                              </div> 
                          </div>
                          <div class="header-main-right">
                            <div class="lingt">
                            <span class="glyphicon glyphicon-trash"></span>                  
                            </div>
                          </div>
                    </div>            
                     <div class="comtent-main-list-main">
                         <div class="left-s list-image">
                          
                         </div>
                         <div class="left-s list-txt">
                            坦克，现代陆上作战的主要武器，具有直射火力、越野能力和装甲防护力的履带式装甲战斗车辆，是陆地武器中其重要性唯一高于轮式装甲车的存在，主要执行与对方坦克或其他装甲车辆作战，也可以压制、消灭反坦克武器、摧毁工事、歼灭敌方陆上力量。
                         <p class="bottom-span">
                           <span class="">中国</span><span class="">中国</span>
                           
                         </p>
                         </div>
                         <div class="sss ">2017-11-01</div>
                     </div>                                       
                </div>

                 <div class="comtent-main-list">
                    <div class="comtent-main-list-title">
                            <div class="header-main-left">
                            <div class="lingf Aotitle">
                               世界坦克官网，各国坦克--xxx网                               
                              </div> 
                          </div>
                          <div class="header-main-right">
                            <div class="lingt">
                            <span class="glyphicon glyphicon-trash"></span>                  
                            </div>
                          </div>
                    </div>            
                     <div class="comtent-main-list-main">
                         <div class="left-s list-image">
                          
                         </div>
                         <div class="left-s list-txt">
                            坦克，现代陆上作战的主要武器，具有直射火力、越野能力和装甲防护力的履带式装甲战斗车辆，是陆地武器中其重要性唯一高于轮式装甲车的存在，主要执行与对方坦克或其他装甲车辆作战，也可以压制、消灭反坦克武器、摧毁工事、歼灭敌方陆上力量。
                         <p class="bottom-span">
                           <span class="">中国</span><span class="">中国</span>
                           
                         </p>
                         </div>
                         <div class="sss ">2017-11-01</div>
                     </div>                                       
                </div>

                 <div class="comtent-main-list">
                    <div class="comtent-main-list-title">
                            <div class="header-main-left">
                            <div class="lingf Aotitle">
                               世界坦克官网，各国坦克--xxx网                               
                              </div> 
                          </div>
                          <div class="header-main-right">
                            <div class="lingt">
                            <span class="glyphicon glyphicon-trash"></span>                  
                            </div>
                          </div>
                    </div>            
                     <div class="comtent-main-list-main">
                         <div class="left-s list-image">
                          
                         </div>
                         <div class="left-s list-txt">
                            坦克，现代陆上作战的主要武器，具有直射火力、越野能力和装甲防护力的履带式装甲战斗车辆，是陆地武器中其重要性唯一高于轮式装甲车的存在，主要执行与对方坦克或其他装甲车辆作战，也可以压制、消灭反坦克武器、摧毁工事、歼灭敌方陆上力量。
                         <p class="bottom-span">
                           <span class="">中国</span><span class="">中国</span>
                           
                         </p>
                         </div>
                         <div class="sss ">2017-11-01</div>
                     </div>                                       
                </div>

            </div>
       </div>
    </div>
 </div> 
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
         items: [
        { name: "坦克" },
        { name: "大炮" },
        { name: "飞机" },
        { name: "大炮1" },
        { name: "坦克2" },
        { name: "大炮5" }
      ],
        searchContext:'',
        type:1,
        shouwimg:false,
         focusimg: false,
         index: -1
    }
  },
   //注册一个获取input焦点事件
  /**@augments {value}判断条件 true : false */
  directives: {
    focus: {
      inserted: function(el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  },
  computed:{
    ...mapGetters([
      'historyKey'
    ])
  },
  methods: {
    searchPrompt:function(){
      axios.post("/military/prompt",{
        originWords:this.searchContext
      }).then(function(response){

      }).catch(function(){

      });
      this.shouwimg = true;
      this.focusimg =true;
    },
    trashout:function(){
       layer.confirm('你确定删除这条历史吗？', {
        btn: ['确定','取消'] //按钮
      }, function(){
        layer.msg('删除成功！', {icon: 1});
      }, function(){
        layer.msg('取消', {icon: 1});
      });
    },
    //焦点离开事件
    bluerd:function () {
      this.shouwimg = false;
      this.focusimg =false;
    },
     //监听键盘向下键
    showup: function() {
      var list = document.querySelectorAll("#listid li");
      var li = document.getElementById("listid");
      // var num = list.length+this.index;
      this.index <= 0 && (this.index = list.length);
      this.index--;
      for (let j = 0; j < li.childNodes.length; j++) {
        li.childNodes[j].style.background = "";
        li.childNodes[j].style.color = "";
      }
      list[this.index].style.background = "#ccc";
      list[this.index].style.color = "#1895ff";
      this.searchContext = list[this.index].innerHTML;
    },
    //监听键盘向下键
    showdown: function() {
      var list = document.querySelectorAll("#listid li");
      var li = document.getElementById("listid");
      this.index++;
      for (let i = 0; i < li.childNodes.length; i++) {
        li.childNodes[i].style.background = "";
        li.childNodes[i].style.color = "";
      }
      this.index >= list.length && (this.index = 0);
      list[this.index].style.background = "#ccc";
      list[this.index].style.color = "#1895ff";
      this.searchContext = list[this.index].innerHTML;
    },
    //监听键盘回车键
    showen: function() {
      // var HtmlVuale = this
      var li = document.getElementById("listid");
      var list = document.querySelectorAll("#listid li");
      this.searchContext = list[this.index].innerHTML;
      this.shouwimg = false;
      // console.log(this.keyword);
    },
    search: function () {
      // axios.get('/military/search?military/search?context='+this.searchContext+'&type='+this.type)
      //   .then(function(response){
      //       this.$store.commit('ADD_HISTORY_KEY', this.searchContext);
      //   }).catch(function(){

      // }).bind(this);
      this.$router.push({path: '/root',query:{ keyword:this.searchContext} });
    },
    trash: function () {
      let vue = this;
      layer.confirm('确定删除全部历史吗？', {
        title: ['提示', 'font-size:18px;', 'background:#1895ff;'],
        btn: ['确定', '取消'] // 按钮
      }, function () {
        vue.$store.commit('REMOVE_HISTORY_KEY');
      }, function () {
        layer.msg('已取消')
      })
    },
    //监听鼠标滑动事件
    moser: function(b){
      // var li = document.getElementById("listid");
      var list = document.querySelectorAll("#listid li");
      this.searchContext = list[b].innerHTML;
    },
     //监听鼠标离开事件
    hiddenDetail:function(){
     this.shouwimg = false;
    // console.log(sss);
    },
    muowher:function(d){
       var list = document.querySelectorAll("#listid li");
      this.searchContext = list[d].innerHTML;
    }
  },
  created:function(){
    //加载历史记录
  },


}
</script>
<style scoped>
.per-comtent {
  width: 100%;
  height: 100%;
  width: 100%;
  background: url('/src/renderer/assets/iamges/bac.jpg') no-repeat 100%;
  background-size: 100% 100%;
}
.imgages {
  position: absolute;
  top: 65px;
  right: 20px;
}
.header-title {
  font-size: 30px;
  width: 580px;
  text-align: center;
  margin: 0 auto;
  line-height: 30px;
}
.header-title-txtx {
  margin-top: 120px;
  margin-bottom: 30px;
}


</style>
