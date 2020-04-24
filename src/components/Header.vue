<template>
   <div class='header flex_row' style="justify-content: flex-end;">
    <div class="header_right flex_row_center">
        <el-dropdown>
            <span>陈毅杰</span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退 出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-avatar :src="avatarSrc"></el-avatar>
    </div>
   </div>
</template>
<script>
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
  },
  mounted() {
  },
}
</script>
<style lang='less' scoped>
// @import url('../utils/less/common');
.header{
    box-sizing: border-box;
    padding: 0px 4%;
    height: 60px;
    border-bottom: solid 1px #e6e6e6;
}
span{
    font-size: 16px;
    margin-right: 20px
}
span:hover{
   cursor: pointer;
}
</style>