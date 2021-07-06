import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/History.vue')
  },
  {
    path: '/situation',
    name: 'Situation',
    component: () => import('@/views/Situation.vue')
  },
  {
    path: '/orphanage',
    name: 'Orphanage',
    component: () => import('@/views/Orphanage.vue')
  },
  {
    path: '/schools',
    name: 'Schools',
    component: () => import('@/views/Schools.vue')
  },
  {
    path: '/spirulina',
    name: 'Spirulina',
    component: () => import('@/views/Spirulina.vue')
  },{
    path: '/villages',
    name: 'Villages',
    component: () => import('@/views/Villages.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@/views/Join.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;