import db from '@/assets/js/DataStore';
import axios from 'axios'

const user = {
  state:{
    username:'',
  },

  mutations:{
    SET_USERNAME : (state, username) => {
      state.username = username;
    }
  },

  actions:{
    login(context, userInfo){
      axios.post("/military/login",{
        username:userInfo.username,
        password:userInfo.password,
      }).then(function(response){
        if (response.data.success) {
          db.userConfig.remove({},{multi:true},function(err,numRemoved){
            db.userConfig.insert({
              username:userInfo.username,
              password:userInfo.password,
              readConfig:userInfo.readConfig,
              autoLogin:userInfo.autoLogin,
              loginTime:new Date
            },function(err, newDoc){

            });
            context.commit('SET_USERNAME', userInfo.username);
          });
        } else {
          alert("登录失败");
        }
      }).catch(function(error){
        console.log(error);
        alert("登录失败");
      });
    }
  }
};

export default user;

