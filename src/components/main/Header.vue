<template>
   <div class='header flex_row_between'>
    <p>xxxx后台管理系统</p>
    <div class="header_right flex_row">
        <el-dropdown>
                <span>陈毅杰</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="handlelogout">退 出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        <el-avatar :src="avatarSrc"></el-avatar>
    </div>
   </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:{
     avatarSrc:{
        type:String,
        default:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
     }
  },
  data () {
    return {
    };
  },
  methods: {
      ...mapActions('login',['logout']),
      // 点击退出按钮
      handlelogout(){
        console.log(123)
        this.logout().then(res =>{
        debugger
        this.$router.push({path:'/login'})
        // 登陆成功的回调、失败的回调
        console.log(123)
        }).catch(err =>{
            // 网络错误的回调
        })
      }
  },
  mounted() {
  },
}
</script>
<style lang='less' scoped>
@import url('../../utils/less/common');
.header{
    box-sizing: border-box;
    padding: 0px 2%;
    height: 60px;
    background-color: @headerBackgroundColor;
    border-bottom: 1px solid @lap;
    color:#fff;
}
span{
    font-size: 16px;
    margin-right: 20px;
    color:#fff;
}
span:hover{
   cursor: pointer;
}
p{
    font-size: 20px;
    font-weight: bolder;
}
</style>