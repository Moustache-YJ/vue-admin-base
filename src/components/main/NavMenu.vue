<template>
   <div class='navMenu flex_row_between'>
       <div class="crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
       </div>
       <div>

       </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
}
</script>
<style lang='less' scoped>
.navMenu{
    height: 40px;
    background-color:pink
}
</style>