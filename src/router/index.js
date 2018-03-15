import Vue from 'vue'
import VueRouter from "vue-router"

import Categorys from '../pages/Categorys/Categorys.vue'
import Home from '../pages/Home/Home.vue'
import  Profile from '../pages/Profile/Profile.vue'
import  ShopCart from '../pages/ShopCart/ShopCart.vue'
import  Class from '../pages/Class/Class.vue'
import  Brand from '../pages/Brand/Brand.vue'

Vue.use(VueRouter)

// 向外暴露vuerouter对象
export default new VueRouter({
  routes: [
    {
      path:'/home',
      component: Home
    },
    {
      path:'/categorys',
      component: Categorys,
      children:[
        {
          path:'/categorys/class',
          component: Class
        },
        {
          path:'/categorys/brand',
          component: Brand
        },
        {
          path:'/categorys',
          redirect: '/categorys/class'
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
