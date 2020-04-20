import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profil from '../views/Profil.vue'
import DodajFilm from '../views/DodajFilm'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: () => import('../views/Registracija.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/dodajFilm',
    name: 'DodajFilm',
    component: DodajFilm,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
