<template>
  <div class="sideItem" v-once>
    <!-- 单个路由记录 -->
    <!-- <el-menu-item v-if="!route.children && !route.meta.hidden" :index="route.path">{{route.meta.name}}</el-menu-item> -->
    <!-- 一个路由记录也等于本身兼容 -->
    <el-menu-item v-if="route.children && route.children.length === 1 && !route.meta.hidden" :index="route.path">
      <template slot="title">
        <div  class="item_title flex_row_center">
          <SvgIcon :iconName="route.meta.icon"></SvgIcon>
          <span>{{route.meta.name}}</span>
        </div>
      </template>
    </el-menu-item>
    <!-- 多个路由记录的嵌套路由 -->
    <el-submenu v-if="route.children && route.children.length > 1 && !route.meta.hidden" :index="route.name">
      <template slot="title">
        <div  class="item_title flex_row_center">
          <SvgIcon :iconName="route.meta.icon"></SvgIcon>
          <span>{{route.meta.name}}</span>
        </div>
      </template>
      <el-menu-item v-for="(item,index) in route.children" :key="index" :index="`${route.path}/${item.path}`">{{item.meta.name}}</el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
const req = require.context('../../assets/svg',false,/\.svg$/)
import SvgIcon from '../main/SvgIcon'
export default {
  components:{
   SvgIcon
  },
  props: {
    route: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      images:[]
    }
  },
  methods: {
    icon(iconPath){
      const icon = req('./record.svg')
      return icon
    }
  },
  created () {
    this.images = req.keys()
    console.log(this.images)
  }
}
</script>
<style lang='less' scoped>
@import url('../../utils/less/common');
.sideItem{
   width:100%;
   text-align: center;
  //  background-color:@siderBackgroundColor
}
.sideItem /deep/ .el-submenu__title{
  font-size:18px;
}
.sideItem /deep/ .el-menu-item{
  font-size:16px
}
</style>
