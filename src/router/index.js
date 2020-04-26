import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/Main'
import ListItem1 from '../views/ListItem1.vue'
// 可以根据角色的不同渲染不同的路由表
Vue.use(VueRouter)
// 路由表（总）根据登陆权限的的修改对应路由表的实现。
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta:{name:"主页",hidden:true}
  },
  {
    path: '/home',
    name: 'home',
    component: main,
    redirect:"/home/home",
    meta:{name:"数据总览",hidden:false,icon:'chart'},
    children:[{
      path: 'home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    }]
  },
  {
    path: '/list',
    name: 'list',
    redirect:"/list/list1",
    meta:{name:"钱包记录",hidden:false,icon:'money'},
    component:main,
    children:[{
      path: 'list1',
      name: 'list1',
      component: () => import(/* webpackChunkName: "about" */ '../views/ListItem1.vue'),
      meta:{name:"列表1",hidden:false,},
    },
    {
      path: 'list2',
      name: 'list2',
      component: () => import(/* webpackChunkName: "about" */ '../views/ListItem2.vue'),
      meta:{name:"列表2",hidden:false}
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
