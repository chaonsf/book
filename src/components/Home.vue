<!--  -->
<template>
  <div>
     <MHead>首页</MHead>
     <div class="content">
         <swiper :swiperSlides="sliders"></swiper>
         <div class="container">
          <h3>热门图书</h3>
         <ul>
           <li v-for="(hot,index) in hotBooks" :key="index">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
           </li>
         </ul>
         </div>

     </div>
    
  </div>
</template>

<script>
   //1.引入组件2.注册组件3，使用组件
  import MHead from '../base/MHead.vue';
  import Swiper from '../base/Swiper.vue';
  import {getSliders,getHotBook} from '../api'
export default {
  name: 'Home',
  data () {
    return {
       sliders:[],
       hotBooks:[]
    };
  },
 created(){
      this.getSlider()  //获取轮播图
      this.getHot()//获取热门图书
  },
  methods: {
   async getSlider(){
        let {data:sliders}=await getSliders();  //快速拿到数据，：后面给data起别名   这是拿到对象里面数据的方法，对象的属性名必须和要得到的结果名字一样
        console.log(sliders);
        this.sliders=sliders;  
     },
    async getHot(){
        let {data}=await getHotBook();
        this.hotBooks=data;
    }
  },
  components:{
      MHead,
      Swiper
  }
}

</script>
<style scoped lang="less">
   .container{
      width:90%;
      margin: 0 auto;
      h3{
        color: #999;
        padding: 5px 0;
      }
     ul{
       display: flex;
       flex-wrap: wrap; //默认不换行
       li{
         width:50%;
         text-align: center;
         margin: 5px 0;
         padding-bottom: 5px;
         img{
             width: 100%;

         }
       }
     }
   }
  
</style>