import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('../views/city/City.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/detail/Detail.vue')
  }, {
    path: '/scroll',
    name: 'Scroll',
    component: () => import('../views/scroll/Scroll.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
