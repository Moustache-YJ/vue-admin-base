import Vue from 'vue'
import VueRouter from 'vue-router'
// 可以根据角色的不同渲染不同的路由表
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
 ]

const router = new VueRouter({
  routes
})

export default router
