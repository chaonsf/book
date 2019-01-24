<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src='slide'>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
        swiperSlides:{
            type:Array,
            default:[]
        }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true
        },
      }
    }
  }
</script>
<style scope >
     img{
         width:100%
     }
</style>
