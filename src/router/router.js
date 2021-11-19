import Vue from 'vue'
import VueRouter from 'vue-router'
import AllCharacters from '../views/AllCharacters.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'allCharacters',
    component: AllCharacters
  },
  {
    path: '/staff-characters',
    name: 'StaffCharacters',
    component: () => import(/* webpackChunkName: "about" */ '../views/StaffCharacters.vue')
  },
  {
    path: '/student-characters',
    name: 'StudentsCharacters',
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentsCharacters.vue')
  },
  {
    path: '/gryffindor-characters',
    name: 'GryffindorCharacters.',
    component: () => import(/* webpackChunkName: "about" */ '../views/GryffindorCharacters.vue')
  },
  {
    path: '/hufflepuff-characters',
    name: 'HufflepuffCharacters.',
    component: () => import(/* webpackChunkName: "about" */ '../views/HufflepuffCharacters.vue')
  },
  {
    path: '/ravenclaw-characters',
    name: 'RavenclawCharacters.',
    component: () => import(/* webpackChunkName: "about" */ '../views/RavenclawCharacters.vue')
  },  {
    path: '/slytherin-characters',
    name: 'SlytherinCharacters.',
    component: () => import(/* webpackChunkName: "about" */ '../views/SlytherinCharacters.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
