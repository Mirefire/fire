import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false;

//配置axios默认模板
axios.defaults.baseURL = 'http://www.easy-mock.com/mock/5a17d9b1b231184136269ff2/';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$http = axios;
sync(store, router);

function addZero(val){
  if(val < 10){
    return "0" +val;
  }else{
    return val;
  }
};

Vue.filter("formatTime",function(value,format){
  value = new Date(value);
  var date = {
    "M+": value.getMonth() + 1,
    "d+": value.getDate(),
    "h+": value.getHours(),
    "m+": value.getMinutes(),
    "s+": value.getSeconds(),
    "q+": Math.floor((value.getMonth() + 3) / 3),
    "S+": value.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;//将格式化后的字符串输出到前端显示
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
