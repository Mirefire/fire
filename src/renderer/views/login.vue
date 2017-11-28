<template>
 <div class="per-content">
     <div class="header-title">
      <div class="header-title-txtx">军事信息搜索演示软件</div>
         </div>
     <div class="login">
        <div class="login-center">
            <div class="login-title">用户登录</div>
            <div class="login-main">
                <div class="input-group login-input login-ii">
                     <span class="glyphicon glyphicon-user"></span>
                    <input type="text" class="form-control" v-model="username" placeholder="账号" aria-describedby="basic-addon1">
                </div>
                 <div class="input-group login-input login-i">                    
                      <span class="glyphicon glyphicon-lock"></span>
                    <input type="password" class="form-control" v-model="password" placeholder="密码" aria-describedby="basic-addon1">
                </div>
                 <div class="input-group login-input login-btn">
                    <button class="btn btn-lg btn-block" @click="login">登录</button>
                </div>
            </div>
            <div class="login-bottom">
                <div class="btn-lfet">
                     <div class="checkbox">
                    <label>
                    <input type="checkbox" v-model="readConfig">从配置文件读取
                    </label>
                </div>
                </div>
                <div class="btn-lfet right-tetxt">
                        <div class="checkbox">
                        <label>
                        <input type="checkbox" v-model="autoLogin">下次自动登录
                        </label>
                    </div>
                </div>
            </div>
       </div>
     </div>
 </div> 
</template>
<script>

import db from '@/assets/js/DataStore';

export default {
  name:"Login",

  data () {
    return {
        readConfig:false,
        autoLogin:false,
        username:"",
        password:"",
    }
  },
  methods: {
    login: function (username, password) {
      let vue = this;
      let doc = {
        readConfig:this.readConfig,
        autoLogin:this.autoLogin
      };
      if (username && password) {
        doc.usename = username;
        doc.password = password;
      } else {
        doc.username = vue.username;
        doc.password = vue.password;
      }
      if (doc.username == "" ) {
        layer.msg("用户名不能为空");
        return ;
      }
      if (doc.password == ""){
        layer.msg("密码不能为空");
        return
      }

      this.$store.dispatch("login", doc).then(()=>{
        this.$router.push({path:'/index'});
      }).catch(()=>{
        alert("登录失败");
      })
    },
  },
  mounted: function () {

  },
  created: function(){
    let vue = this;
    db.userConfig.findOne({autoLogin:true},function (err, doc) {
      if (doc != null && doc.username && doc.password) {
        vue.login(doc.username, doc.password);
      }
    });
  }

}
</script>
<style scoped>
 .per-content{
     width: 100%;
     height: 100%;
     background: url('/src/renderer/assets/iamges/bac.jpg') no-repeat 100%;
     background-size: 100% 100%;
     padding-top: 53px;
 }

 .header-title{
     font-size: 30px;
     width: 580px;
     text-align:center;
     margin: 0 auto;
     line-height: 30px;
 }
 .header-title-txtx{
     margin-top: 120px;
     margin-bottom: 30px;
 }
 .login{
     height: 460px;
     width: 580px;
     border-radius: 10px;
     background: rgba(0, 0, 28, 0.4);
     margin: 0 auto 10%;
     
     /* opacity: 0.4; */
 }
 .login-title{
     width: 100%;
     text-align: center;
     font-size: 20px;
     color: #fefefe;
     padding-top: 58px;
 }
 .login-center{
     width: 432px;
     margin: 0 auto;
 }
  .login-i{
    margin-top: 16px;
  }
 .login-input{
     width: 100%;
 }
 .login-ii{
    position: relative;
    top:50px;
 }
  .login-i{
     position: relative;
     top:25px;
 }
 .login-input span{
   font-size: 20px;
   color: #fefefe;
   position: relative;
   top: 44px;
   left: 10px;
   color: #fff;
   z-index: 9999;
}
 .login-input input{
     border: 1px solid #fefefe;
     height: 58px;
     line-height: 58px;
     width: 100%;
     border-radius: 10px !important;
     background: rgba(0, 0, 28, 0.4) !important;
     outline: none;
     padding-left: 40px;
     color: #fff;
     font-size: 18px;
 }
  
 .login-btn{
    position: relative;
     top:60px;
     font-size: 20px;
 }
 .login-input button{
     height: 58px;
     border-radius: 10px;
     background: #007ee9;
     color: #fefefe;
 }
 .login-bottom{
    position: relative;
     top:66px;
 }
 .btn-lfet{
     float: left;
     width: 50%;
     line-height: 20px;
 }
 .checkbox{
     font-size: 18px;
     color: #fefefe;
 }

 .checkbox input{
     height: 16px;
     width: 16px;
     vertical-align: center;
     margin-right:8px;
    
 }
 .right-tetxt{
     text-align: right;
 }
input::-moz-placeholder{
    color: #fff;
}
input::-webkit-input-placeholder{
    color: #fff;
}
input::-ms-input-placeholder{
    color: #fff;
}
</style>
