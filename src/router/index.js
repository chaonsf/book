import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';

Vue.use(Router)
/* 路由懒加载 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/home',
      name: 'Home',
      component:()=>import("../components/Home.vue")
    },
    {
      path: '/collect',
      name: 'Collect',
      component:()=>import("../components/Collect.vue")
    },
    {
      path: '/add',
      name: 'Add',
      component:()=>import("../components/Add.vue")
    },
    {
      path: '/detail/:bid',
      name: 'Detail',
      component:()=>import("../components/Detail.vue")
    },
    {
      path: '/list',
      name: 'List',
      component:()=>import("../components/List.vue")
    },

  ]
})
