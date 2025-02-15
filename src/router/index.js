import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import WareHouseList from '@/views/WareHouseList.vue'
import WareHouseNew from '@/views/WareHouseNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

    // component: AboutView
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WareHouseList
  },
  {
    path: '/warehouses/new',
    name: 'new',
    component: WareHouseNew
  }
]

const router = new VueRouter({
  mode: 'history', // aqui tira a # da URL
  routes
})

export default router
