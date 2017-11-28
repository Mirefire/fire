<template>
  <div class="root-mian">
    <div class="root-qie">
  
      <div class="a-root-qie">
  
        <div @click="all" class="a-qie">
  
          <router-link to="/root/all" v-bind:class="{link:ky}">全部</router-link>
  
        </div>
  
        <div @click="imgs" class="a-qie">
  
          <router-link to="/root/imgs" v-bind:class="{link:ky1}">图片</router-link>
  
        </div>
  
        <div @click="video" class="a-qie">
  
          <router-link to="/root/video" v-bind:class="{link:ky2}">视频</router-link>
  
        </div>
       <div class="a-img">
         <img src="/src/renderer/assets/iamges/login_img.png" alt="">
       </div>
      </div>
  
    </div>
  
    <div class="root-seacher">
      <div class="seacher-div">
        <input type="text" placeholder="请输入搜索内容" v-model="keyword" v-focus="focusimg" @click="inbtn" @blur="bluerd()" @keyup.up="showup()" @keyup.down="showdown()" @keyup.enter="showen()">
        <button class="seacher-btn">
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
       
    </div>
  
    <div style="clear: both;"></div>
  
    <div class="seacher-main rrot-main">
  
      <router-view/>
  
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: "坦克" },
        { name: "大炮" },
        { name: "飞机" },
        { name: "大炮1" },
        { name: "坦克2" },
        { name: "大炮5" }
      ],
      ky: true,
      shouwimg: false,
      focusimg: false,
      ky1: false,
      ky2: false,
      index: -1,
      keyword: ""
    };
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
  mounted: function() {},
  created: function() {
    var index0 = sessionStorage.getItem("index0");
    this.keyword = this.$route.query.keyword;
    // console.log(this.$route.query.keyword);
   
    if (index0 != "null" || index0 != "") {
      if (index0 == "all") {
        this.ky = true;
        this.ky1 = false;
        this.ky2 = false;
      } else if (index0 == "imgs") {
        this.ky = false;

        this.ky1 = true;

        this.ky2 = false;
      } else if (index0 == "video") {
        this.ky = false;
        this.ky1 = false;
        this.ky2 = true;
      }
    }
  },
  methods: {
   
    all: function() {
      this.ky = true;

      this.ky1 = false;

      this.ky2 = false;
      sessionStorage.setItem("index0", "all");
    },

    imgs: function() {
      this.ky = false;
      sessionStorage.setItem("index0", "imgs");
      this.ky1 = true;

      this.ky2 = false;
    },

    video: function() {
      this.ky = false;
      this.ky1 = false;
      this.ky2 = true;
      sessionStorage.setItem("index0", "video");
    },
    inbtn: function() {
      this.shouwimg = true;
    },
    //监听input焦点离开事件
    bluerd: function() {
      this.shouwimg = false;
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
      this.keyword = list[this.index].innerHTML;
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
      this.keyword = list[this.index].innerHTML;
    },
    //监听键盘回车键
    showen: function() {
      // var HtmlVuale = this
      var li = document.getElementById("listid");
      var list = document.querySelectorAll("#listid li");
      this.keyword = list[this.index].innerHTML;
      this.shouwimg = false;
      // console.log(this.keyword);
    },

    //监听鼠标滑动事件
    moser:function(b){
       // var li = document.getElementById("listid");
      var list = document.querySelectorAll("#listid li");
      this.keyword = list[b].innerHTML;
    },
    //监听鼠标离开事件
    hiddenDetail:function(){
     this.shouwimg = false;
    }
  },
  destroyed: function() {
    sessionStorage.removeItem("index0");
  }
};
</script>

<style scoped>
.root-mian {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
}
.root-qie {
  width: 100%;

  width: 900px;

  margin: 0 auto;
}

.a-root-qie {
  line-height: 55px;

  margin-top: 56px;

  margin-bottom: 18px;

  font-size: 18px;

  color: #555555;
}

.a-root-qie .a-qie {
  margin-right: 24px;

  padding: 5px 0;

  float: left;
}
.a-root-qie .a-img {
  float: right;
}
.a-root-qie .a-img img {
  width: 204px;
}
.link {
  padding: 5px 0;

  color: #1895ff;

  border-bottom: 2px solid #1895ff;

  border-top-left-radius: 2px;

  border-bottom-left-radius: 2px;

  border-top-right-radius: 2px;

  border-bottom-right-radius: 2px;

  width: 40px;
}

.rrot-main {
}
</style>
