<!--  -->
<template>
  <div class="footer">
    <router-link to='/home'>
     <i class="iconfont icon-weibiaoti--"></i>
       <span>首页</span>
       </router-link>
    <router-link to='/list'>
     <i class="iconfont icon-liebiaoye"></i>
     <span>列表</span>
     </router-link>
    <router-link to='/collect'>
      <i class="iconfont icon-shoucang-copy"></i>
    <span>收藏</span>
    </router-link>
    <router-link to='/add'>
    <i class="iconfont icon-tianjiayemian"></i>
    <span>添加</span>
    </router-link>
  </div>
</template>

<script>
export default {
    name:"Tab",
  data () {
    return {
    };
  },

  methods: {}
}

</script>
<style scoped lang='less'>
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        display:flex;
        border-top: 1px solid #ccc;
        a{
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            justify-content: center;
            color: yellowgreen;
        }
        a.router-link-active{  //激活后的样式
            color: red;
        }
    }
</style>