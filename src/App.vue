<template>
  <div id="app">
    <router-view/>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './base/Tab';
export default {
  name: 'App',
  components:{
     Tab
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none
}
ul,li{
  list-style: none
}
input,button{
  appearance: none;
}
.content{
   position: fixed;
   width: 100%;
   top:40px;
   bottom:50px;
   overflow:auto;
}
</style>
