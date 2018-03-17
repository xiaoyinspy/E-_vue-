import Vue from 'vue'
import VueRouter from "vue-router"

import Categorys from '../pages/Categorys/Categorys.vue'
import Home from '../pages/Home/Home.vue'
import  Profile from '../pages/Profile/Profile.vue'
import  ShopCart from '../pages/ShopCart/ShopCart.vue'
import  Class from '../pages/Class/Class.vue'
import  Brand from '../pages/Brand/Brand.vue'
import All from '../pages/All/All.vue'


Vue.use(VueRouter)

// 向外暴露vuerouter对象
export default new VueRouter({
  linkActiveClass: 'on',
  routes: [
    {
      path:'/home',
      component: Home,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/categorys',
      component: Categorys,
      meta:{
        showFooter: true
      },
      children:[
        {
          path:'/categorys/class',
          component: Class,
          meta:{
            showFooter: true,
            showHeader: true
          },
        },
        {
          path:'/categorys/brand',
          component: Brand,
          meta:{
            showFooter: true,
            showHeader: true
          },
        },
        {
          path:'/categorys/all',
          component: All,
        },
        {
          path:'/categorys',
          redirect: '/categorys/class',
        },
      ]
    },
    {
      path:'/shopcart',
      component: ShopCart
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'
    },


  ]
})
