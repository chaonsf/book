<!--  -->
<template>
  <div class="header">
        <slot></slot>
       <i class="iconfont icon-fanhui" v-if="back" @click='goBack'></i>
  </div>
</template>

<script>
export default {
    name:"MHead",
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
  methods: {
      goBack(){
          this.$router.go(-1)  //后退
      }
  }
}

</script>
<style scoped lang='less'>
    .header{
        text-align: center;
        background: #afd9ee;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        position:fixed;
        left: 0;
        top: 0;
        width: 100%;
        i{
            position: absolute;
            left: 10px;
        }
    }
</style>