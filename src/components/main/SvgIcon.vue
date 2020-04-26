<template>
   <div class=''>
       <img :src="icon()" alt="">
   </div>
</template>
<script>
const req = require.context('../../assets/svg',false,/\.svg$/)
export default {
  props:{
    iconName:{
        type:String,
        default:'record'
    }
  },
  data () {
    return {
    };
  },
  methods:{
    icon(){
      const icon = req(`./${this.iconName}.svg`)
      return icon
    }
  }
}
</script>
<style lang='less' scoped>
img{
    margin-right: 5px;
    transform: scale(.7)
}
</style>