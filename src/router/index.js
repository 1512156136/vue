import Vue from 'vue'
import VueRouter from 'vue-router'
import 首页 from '../views/首页.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    component: 首页
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
	  path:"/用户列表",
	  name:'用户列表',
	  component: () => import('../views/用户列表.vue')
  },{
	  path:"/商家列表",
	  name:"商家列表",
	  component: () => import('../views/商家列表.vue')
  },
  {
  	  path:"/添加商铺",
  	  name:"添加商铺",
  	  component: () => import('../views/添加商铺.vue')
  },
  {
  	  path:"/添加商品",
  	  name:"添加商品",
  	  component: () => import('../views/添加商品.vue')
  },{
  	  path:"/用户分布图",
  	  name:"用户分布图",
  	  component: () => import('../views/用户分布图.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
