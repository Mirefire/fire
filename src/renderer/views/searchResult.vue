<template>
    <div class="result" style="height: 100%">
        <div class="logo">
            <img src="/src/renderer/assets/iamges/login_img.png" alt="">
        </div>
        <div class="search-input-wrapper">
            <search-input :showHeader="true"></search-input>
        </div>

        <div class="search-result-wrapper">
            <template v-if="searchType == '' || searchType == 'all'">
                <search-item :type="'doc'" :dataList="searchResult.doc"></search-item>
                <search-item :type="'img'" :dataList="searchResult.img"></search-item>
            </template>
            <template v-if="searchType =='doc'">
                <search-item :type="'doc'" :dataList="searchResult.doc"></search-item>
            </template>
            <template v-if="searchType =='img'">

                <search-item :type="'img'" :dataList="searchResult.img"></search-item>
            </template>
            <template v-if="searchType == 'vf'">
                <search-item :type="'vf'" :dataList="searchResult.vf"></search-item>
            </template>

        </div>



    </div>
</template>
<script>
  import searchInput from '@/components/search/SearchInput';
  import searchItem from '@/components/search/SearchItem';
  import {mapState} from 'vuex';
  export default {
    name:'searchResult',
    data(){
      return {

      }
    },
    components:{
      searchInput,
      searchItem
    },
    computed:{
      ...mapState({
        searchResult: state => state.search.result,
        searchType:state => state.search.type,
      })
    },
    created:function(){
      document.querySelector("body").style.backgroundImage = "none";
      document.querySelector("body").style.backgroundColor = "#FFFFFF";
    }
  }
</script>

<style scoped>
    .logo{
        width: 100%;
        padding-top: 20px;
        padding-right: 20px;
    }
    .logo img{
        float: right;

    }
    .logo:after{
        display: block;
        content: "";
        clear: both;
    }
    .search-input-wrapper{
        margin: 50px auto;
    }
    .search-result-wrapper{
        margin:10px auto ;
        width: 800px;
    }
</style>
