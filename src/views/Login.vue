<template>
   <div class='login'>
          <div class="login-back"></div>
          <!-- <p class="title">必乐领主平台</p> -->
          <div class="login-main" :class="[{'animated':btnStatus},{'fadeIn':btnStatus}]" id="btnController" style="left: 40%;">
              <p class="title">必乐领主平台</p>
              <p class="suffix">助力内部开发人员开发流程</p>
              <div style="margin-top:20px" v-show="btnStatus">
                  <div class="btn_login" @click="loginStatus = true">登陆</div>
                  <div class="btn-register" @click="registerStatus = true">注册</div>
              </div>
          </div>
          <div class="loginCard" ref="loginCard" :class="[{'animated':loginStatus},{'fadeIn':loginStatus},{'show':loginStatus}]" >
             <el-form :model="loginForm" :rules="login_rule" ref="login_rule">
                <el-form-item prop="account">
                  <el-input prefix-icon="el-icon-user" v-model="loginForm.account" clearable placeholder="请输入手机号/昵称"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input prefix-icon="el-icon-place" v-model="loginForm.password" clearable :show-password="true" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-button type="primary" :loading="loading" @click="login" round style="width:100%">登 录</el-button>
              <!-- <el-button type="danger"  @click="register">注 册</el-button> -->
            </el-form>
          </div>
          <div class="registerCard" ref="register"  :class="[{'animated':registerStatus},{'fadeIn':registerStatus},{'show':registerStatus}]" >
             <el-form :model="registerForm" :rules="rule" ref="reg_rule">
                <el-form-item prop="user_name">
                  <el-input prefix-icon="el-icon-user" v-model="registerForm.user_name" clearable placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item prop="user_phone">
                  <el-input prefix-icon="el-icon-phone-outline" v-model="registerForm.user_phone" clearable placeholder="请输入手机"></el-input>
                </el-form-item>
                <el-form-item prop="user_email">
                  <el-input prefix-icon="el-icon-c-scale-to-original" v-model="registerForm.user_email" clearable placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="user_password">
                  <el-input prefix-icon="el-icon-place" v-model="registerForm.user_password" clearable :show-password="true" placeholder="输入密码"></el-input>
              </el-form-item>
              <el-button type="primary"  @click="register" round style="width:100%">注 册</el-button>
              <!-- <el-button type="danger"  @click="register">注 册</el-button> -->
            </el-form>
          </div>
          <div class="back_btn flex_column_center" v-show="backStatus" @click="loginStatus = false,registerStatus =false">
              <div class="triangle"></div>
          </div>
   </div>
</template>
<script>
import {mapActions} from 'vuex'
import encryption from '../utils/encryption/index'
import { validatePwd,validatePhone,validateEmail } from '../utils/element/verify'
export default {
  data () {
    return {
      loading:false,
      loginForm:{
        account:'',
        password:''
      },
      registerForm:{
        user_name:'',
        user_phone:'',
        user_email:'',
        user_password:''
      },
      login_rule:{
        account: [
            {required: true, message: '请输入手机号/昵称', trigger: 'blur'}
        ],
        password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
        ],
      },
      rule:{
        user_name: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
        ],
        user_phone: [
            { validator: validatePhone, trigger: 'blur' }
        ],
        user_email: [
            { validator: validateEmail, trigger: 'blur' }
        ],
        user_password: [
            { validator: validatePwd, trigger: 'blur' }
        ],
      },
      loginStatus:false,
      registerStatus:false,
    };
  },
  computed:{
    btnStatus(){
      return !(this.loginStatus || this.registerStatus)
    },
    backStatus(){
      return (this.loginStatus || this.registerStatus)
    }
  },
  watch:{
    loginStatus(newValue,oldValue){
       if(newValue){
         this.btnMove()
       }else{
         this.btnMove('center')
       }
    },
    registerStatus(newValue,oldValue){
       if(newValue){
         this.btnMove()
       }else{
         this.btnMove('center')
       }
    }
  },
  methods: {
    ...mapActions('login',['login']),
    btnMove(act = 'left'){
      const el = document.getElementById('btnController')
      let left = Number(el.style.left.split('%')[0])
      let vi = 0
      if(act === 'left'){
        el.style.textAlign = 'left'
        vi = -0.5
      }
      if(act === 'center'){
        el.style.textAlign = 'center'
        vi = 0.5
      }
      const timer = setInterval(() => {
        left += vi
        console.log(left)
        if(left >= 20 && left<=40){
          el.style.left = `${left}%`
        }else{
          clearInterval(timer)
        }
      }, 17)
    },
    login(){
      this.$refs['login_rule'].validate((valid) =>{
        if(valid){
          this.loginApi()
        }else{
          this.$message.warning('请确认登陆表单')
        }
      })
    },
    register(){
      this.$refs['reg_rule'].validate((valid) =>{
        if(valid){
          this.registerApi()
        }else{
          this.$message.warning('请确认注册表单')
        }
      })
    },
    loginApi(){
      const form = this.loginForm
      this.loading = true
      this.$api.login({data:{account:form.account,password:encryption.encryptPwd(form.password)}}).then(res =>{
        this.loading = false
        this.$refs['login_rule'].resetFields()
        if(res.data.status){
           this.$message.success('登陆成功')
           //TODO 登陆之后的跳转
         }else{
           this.$message.error(res.data.msg)
         }
      })
    },
    registerApi(){
      this.$api.register({data:{...this.registerForm}}).then(res =>{
        this.$refs['reg_rule'].resetFields()
         if(res.data.status){
           this.$message.success('注册成功')
         }else{
           this.$message.error(res.data.msg)
         }
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
  position: relative;
  width: 100vw;
  height: 100vh;
}
.login-back{
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/login/3.jpg');
  background-size: 100% 100%;
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  top:0px;
  .title{
    text-align: center;
    font-size: 20px;
    font-weight: 700
  }
  /deep/ .el-form{
    padding: 10%;
  }
}
.loginCard,.registerCard{
  width: 300px;
  padding: 30px;
  background-color: rgba(255,255,255,.6);
  // background-color: white;
  box-shadow:0px 2px 10px 2px #3e3e3e;
  border-radius: 30px;
  display: none;
  position: absolute;
  right: 20%;
  top:30%;
}
.login-main{
  position: absolute;
  top:30%;
  text-align: center;
  .title{
     color:white;
     font-size: 45px;
     font-weight: bolder;
  }
  .suffix{
     color:white;
     font-size: 35px;
  }
}
.btn_login,.btn-register{
    display: inline-block;
    cursor: pointer;
    width: 160px;
    height: 62px;
    line-height: 62px;
    text-align: center;
    border-radius: 34px;
    border: solid 1px #fff;
    background-color: rgba(255,255,255,0.05);
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-right: 20px;
}
.btn_login:hover{
   background-color: rgba(255,255,255,0.5);
}
.btn-register:hover{
   background-color: rgba(255,255,255,0.5);
}
.back_btn{
  background-color: rgba(255,255,255,.6);
  // background-color: white;
  box-shadow:0px 2px 10px 2px #3e3e3e;
  border-radius: 30px;
  position: absolute;
  bottom: 5%;
  left: 47%;
  text-align: center;
  width: 100px;
  height: 44px
}
.back_btn:hover{
  background-color: rgba(255,255,255,.8);
}
.triangle{
   width: 0;
   height: 0;
    border-top: 10px solid black;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent
}
.lebal{
  font-size: 15px;
}
.show{
  display: block;
}
</style>