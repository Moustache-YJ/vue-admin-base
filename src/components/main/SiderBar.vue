<template>
  <div class="sideItem" v-once>
    <!-- 单个路由记录 -->
    <el-menu-item v-if="!route.children && !route.meta.hidden" :index="route.path">{{route.meta.name}}</el-menu-item>
    <!-- 一个路由记录也等于本身兼容 -->
    <el-menu-item v-if="route.children && route.children.length === 1 && !route.meta.hidden" :index="route.path">{{route.meta.name}}</el-menu-item>
    <!-- 多个路由记录的嵌套路由 -->
    <el-submenu v-if="route.children && route.children.length > 1 && !route.meta.hidden" :index="route.name">
      <template slot="title">
        <div  class="oneName">
          {{route.meta.name}}
        </div>
      </template>
      <el-menu-item v-for="(item,index) in route.children" :key="index" :index="`${route.path}/${item.path}`">{{item.meta.name}}</el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  props: {
    route: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
  },
  mounted () {}
}
</script>
<style lang='less' scoped>
@import url('../../utils/less/common');
.sideItem{
   width:100%;
   text-align: center;
   background-color:@siderBackgroundColor
}
.sideItem /deep/ .el-submenu__title{
  font-size:18px;
}
.sideItem /deep/ .el-menu-item{
  font-size:16px
}
</style>
