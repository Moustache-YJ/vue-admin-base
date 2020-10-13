<template>
   <div class='login flex_column_center'>
       <div>
          <!-- <p class="title">必乐领主平台</p> -->
          <div class="loginCard" id="login" ref="loginCard" :class="[{'animated':onload},{'fadeIn':onload},{'show':onload}]" >
             <el-form v-model="loginForm">
                <el-form-item>
                  <el-input prefix-icon="el-icon-user" v-model="loginForm.account" clearable placeholder="输入管理员账号"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input prefix-icon="el-icon-place" v-model="loginForm.password" clearable :show-password="true" placeholder="输入管理员密码"></el-input>
              </el-form-item>
              <el-button type="primary" :loading="loading" @click="handleLogin">登 录</el-button>
              <el-button type="danger"  @click="register">注 册</el-button>
            </el-form>
          </div>
       </div>
   </div>
</template>
<script>
import {mapActions} from 'vuex'
import encryption from '../utils/encryption/index'
export default {
  data () {
    return {
      loading:false,
      loginForm:{
        account:'',
        password:''
      },
      onload:false
    };
  },
  methods: {
    ...mapActions('login',['login']),
    handleLogin(){
      const form = this.loginForm
      console.log(encryption.encryptPwd(form.password))
      this.login(this.loginForm).then(res =>{
        // 登陆成功的回调、失败的回调
        this.$router.push('/home')
      }).catch(err =>{
        // 网络错误的回调
      })
    },
    register(){

    }
  },
  mounted() {
    window.onload = ()=>{
      this.onload = true
    },
    console.log(main)
    console.log(this.$store)
  },
}
</script>
<style lang='less' scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/login/3.jpg');
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
  height: 250px;
  background-color: rgba(255,255,255,.6);
  // background-color: white;
  box-shadow:0px 2px 10px 2px #3e3e3e;
  border-radius: 5px;
  margin-top:-100px;
  display: none
}
.lebal{
  font-size: 15px;
}
.show{
  display: block;
}
</style>