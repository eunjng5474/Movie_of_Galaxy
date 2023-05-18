import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/MovieView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LogInView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignUpView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
