<template>
   <div class='main'>
       <Header></Header>
       <div class="flex_row main_info">
            <el-menu
            class="siderBar"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff"
            >
              <siderBar v-for="(item,index) in routerList" :key="index" :route="item"></siderBar>
            </el-menu>
            <div class="left">
              <NavMenu :matched="$route.matched"></NavMenu>
              <div class="router_view">
                  <transition name="fade" mode="out-in">
                    <router-view/>
                  </transition>
              </div>
            </div>
       </div>
   </div>
</template>
<script>
import SiderBar from './main/SiderBar'
import Header from './main/Header'
import NavMenu from './main/NavMenu'
export default {
  components:{
    SiderBar,
    Header,
    NavMenu
  },
  data () {
    return {
        routerList:[],
        index:''
    };
  },
  methods: {
  },
  mounted() {
    this.routerList = this.$router.options.routes
  },
}
</script>
<style lang='less' scoped>
@import url('./../utils/less/common');
.main_info{
  height: calc(~'100vh - 60px');
}
.siderBar{
    width: 250px;
    height: 100%;
    border-right: solid 1px #e6e6e6;
    background-color:@siderBackgroundColor
}
.siderBar /deep/ .el-menu{
  border: unset
}
.left{
   width: 100%;
   height: 100%;
}
.sider_title{
  font-size:16px;
  text-align: center;
  color:#fff;
}
.fade-enter-active {
  animation: fadeIn .7s;
}
.router_view{
   height: calc(~'100vh - 120px');
   margin: 0px .5% 10px .5%;
   border: 1px solid @lap;
   padding: 10px;
   box-sizing: border-box;
   border-radius: 10px;
}
</style>