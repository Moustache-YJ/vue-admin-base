<template>
   <div class='navMenu flex_row_between'>
       <div class="crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>后台管理系统</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item,index) in matched" :key="item.path">{{item.meta.name}}</el-breadcrumb-item>
            </el-breadcrumb>
       </div>
       <div>

       </div>
   </div>
</template>
<script>
export default {
  props:{
    matched:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
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
}
</style>