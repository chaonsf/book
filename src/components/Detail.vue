<!--  -->
<template>
  <div class="detail">
    <MHead :back='true'>详情页</MHead>
     <div class="content">
        {{getId}}
     </div>
  </div>
</template>

<script>
import MHead from "../base/MHead";
import {findOneBook} from '../api'
export default {
  name: 'Detail',
  data () {
    return {
       book:{}
    };
  },
  computed:{
      getId(){
          return this.$route.params.bid    //将路径参数上得bid映射到getId上
      }
  },
  watch:{
     $route(){  //只要路径变化，重新获取数据
        this.getOneBook()
     }
  },
   components:{
      MHead
  },
  created(){
     this.getOneBook()
  },
  methods: {
     async getOneBook(){
         let {data:book}=await findOneBook(this.getId);
         this.book=book;
     }
  }
}

</script>
<style scoped lang="less">
.detail{
   position: absolute;
   left: 0;
   top:0;
   bottom:0;
   right:0;
   background: #fff;
   z-index: 100;
   /*这样做是为了将底部得Tab组件给遮住，不让其显示出来 */
}
</style>