<template>
   <div class='login flex_column_center'>
       <div>
          <p class="title">xxxxx后台管理系统</p>
          <div class="loginCard">
             <el-form v-model="loginForm">
                <p class="animated fadeInUp lebal">账号：</p>
                <el-form-item>
                  <el-input v-model="loginForm.account" clearable placeholder="输入管理员账号"></el-input>
                </el-form-item>
                <p class="animated fadeInUp lebal">密码：</p>
                <el-form-item>
                  <el-input v-model="loginForm.password" clearable :show-password="true" placeholder="输入管理员密码"></el-input>
              </el-form-item>
              <el-button type="primary" :loading="loading" @click="handleLogin">登 录</el-button>
            </el-form>
          </div>
       </div>
   </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      loading:false,
      loginForm:{
        account:'',
        password:''
      }
    };
  },
  methods: {
    ...mapActions('login',['login']),
    handleLogin(){
      this.login(this.loginForm).then(res =>{
        // 登陆成功的回调、失败的回调
        this.$router.push('/home')
        console.log(123)
      }).catch(err =>{
        // 网络错误的回调
      })
    }
  },
  mounted() {
    console.log(this.$store)
  },
}
</script>
<style lang='less' scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/login/2.jpg');
  background-size: 100% 100%;
  padding:5%;
  box-sizing: border-box;
  .title{
    text-align: center;
    font-size: 20px;
    font-weight: 700
  }
  /deep/ .el-form{
    padding: 10%;
  }
}
.loginCard{
  width: 400px;
  height: 300px;
  background-color: rgba(255,255,255,.6);
  // background-color: white;
  box-shadow:0px 2px 10px 2px #3e3e3e;
  border-radius: 5px;
  margin-top:20px
}
.lebal{
  font-size: 15px;
}
</style>