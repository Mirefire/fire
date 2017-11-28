<!--提示搜索框组件 -->
<template>
    <div class="search-wrapper">
        <div class="search-type-wrapper" v-if="showHeader">
            <ul class="search-type">
                <li class="type-item" v-for="(item, index) in typeList" @click="changeType(index)" :class="{select:index === currentTypeIndex}" >
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="search-input-wrapper">
            <input type="text" placeholder="请输入搜索内容" v-model="searchContext" debounce="500"  @keyup="promptHandler($event)"
                   @blur="blurHandler()" @keyup.up="keyUpHandler()" @keyup.down="keyDownHandler()">
            <button class="search-btn" @click="search()">
                <i class="glyphicon glyphicon-search"></i> 搜索
            </button>
            <div class="clearfix"></div>
        </div>

        <div class="prompt-wrapper" v-show="showPrompt" >
            <ul>
                <li v-for="(item, index) in promptList" :class="{gray:index===nowIndex}">
                    {{item.keyword}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
      name:'searchInput',
      data(){
        return {
          showPrompt:false,
          searchContext:'',
          promptList:[],
          nowIndex:-1,
          currentTypeIndex:0,
          typeList:[{title:'全部',type:''},{title:'图片',type:'img'},{title:'视频',type:'vf'}]
        }
      },
      props:{
        showHeader:{
          type:Boolean
        }
      },
      methods:{
        changeType(index){
            this.currentTypeIndex = index;
            let type = this.typeList[this.currentTypeIndex].type;
            this.$store.commit('CHANGE_SEARCH_TYPE',this.typeList[this.currentTypeIndex].type);
            this.$router.push({query:{type:type}});
            this.search();
        },
        search(){

            let searchParam = {
              context:this.searchContext,
              type:this.typeList[this.currentTypeIndex]
            };
            this.$store.dispatch('search',searchParam).then(()=>{
              if (this.$route.path == "/index"){
                this.$router.push({path: '/root'})
              }
            }).catch(()=>{

            })

        },
        promptHandler(event){
          //如果是上下按键则发挥
          if (event.keyCode == 38 || event.keyCode == 40 ){
            return;
          }

          this.$http.get('/military/prompt?originWords='+this.searchContext)
            .then(response => {
                this.promptList = response.data;
                let height = event.target.parentNode.parentNode.offsetHeight;
                document.querySelector(".prompt-wrapper").style.top=height + "px";
                this.showPrompt = true;
            })
            .catch(error => {
              this.showPrompt = false;
            })
        },
        blurHandler(){
            this.showPrompt = false;
        },
        keyUpHandler(){
            this.nowIndex = this.nowIndex <= 0 ? this.promptList.length - 1 : --this.nowIndex;
            if (this.promptList.length > 0){
              this.searchContext = this.promptList[this.nowIndex].keyword;
            }

        },
        keyDownHandler(){
          this.nowIndex = this.nowIndex >= this.promptList.length-1 ? 0 : ++this.nowIndex;
          if (this.promptList.length > 0){
            this.searchContext = this.promptList[this.nowIndex].keyword;
          }

        }
      },
      created:function(){
        if (this.$route.query.type) {
          let queryType = this.$route.query.type;
          for (let i = 0; i < this.typeList.length; i++) {
            let item = this.typeList[i];
            if (item.type == queryType) {
              this.currentTypeIndex = i;
              break
            }
          }
          this.search();
        }
      }
    }
</script>

<style>
    .search-wrapper {
        max-width: 800px;
        margin: 0 auto;
        line-height: 56px;
        position: relative;
    }
    search-input-wrapper{
        height: 56px;
        width: 100%;
    }
    .search-wrapper input {
        float: left;
        width: 674px;
        height: 56px;
        outline: none;
        border-left: 1px solid #1893fc;
        border-top: 1px solid #1893fc;
        border-bottom: 1px solid #1893fc;
        border-right: none;
        padding-left: 20px;
    }
    .search-wrapper input::-webkit-input-placeholder {
        color: #555555;
        font-size: 18px;
    }
    .search-btn {
        float: left;
        width: 126px;
        height: 56px;
        background: #1895ff;
        border: none;
        vertical-align: top;
        font-size: 20px;
        color: #fefefe;
        line-height: 56px;
        cursor: pointer;
    }
    .search-btn i {
        font-size: 25px;
        vertical-align: middle;
    }

    .sha-boxs{

    }
    .prompt-wrapper{
        width: 674px;
        height: 300px;
        position: absolute;
        left:0;
        z-index: 9999;
    }
    .prompt-wrapper ul:after{
        display: block;
        content: '';
        clear: both;
    }
    .prompt-wrapper ul li{
        width: 100%;
        line-height: 30px;
        padding: 0 10px;
        background: #fff;
        border: 1px solid #ccc;
        border-top:none;
        overflow: hidden;
        height: auto;
    }
    .prompt-wrapper ul li:hover{
        background: #ccc;
        color: #1895ff;
    }
    .prompt-wrapper ul li:active{
        background: #f5f5ff;
        color: #1895ff;
    }
    .prompt-wrapper ul li.gray{
        background: #ccc;
        color: #1895ff;
    }
    .search-type-wrapper{
        width: 100%;
        height: 20px;
        margin-bottom: 5px;
    }
    .search-type{
        width: 100%;
        height: 100%;
    }
    .type-item{
        float: left;
        height: 100%;
        line-height: 20px;
        width: 30px;
        cursor: pointer;
    }
    .type-item + .type-item{
        margin-left: 10px;
    }
    .type-item.select{
        color: #1895ff;
        border-bottom: 1px solid #1893fc;
    }
    .clearfix{
        clear: both;
    }
</style>