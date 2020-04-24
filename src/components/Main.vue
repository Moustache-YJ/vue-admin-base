<template>
   <div class='main flex_row'>
       <div class="siderBar">
            <el-menu
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff"
            >
                <siderBar v-for="(item,index) in routerList" :key="index" :route="item"></siderBar>
            </el-menu>
       </div>
       <div class="left">
           <Header></Header>
           <router-view/>
       </div>
   </div>
</template>
<script>
import SiderBar from './main/SiderBar'
import Header from './main/Header'
export default {
  components:{
    SiderBar,
    Header
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
.siderBar{
    width: 250px;
    height: 100vh;
    border-right: solid 1px #e6e6e6;
    background-color:@siderBackgroundColor
}
.siderBar /deep/ .el-menu{
  border: unset
}
.left{
   width: 100%;
   height: 100vh;
}
</style>