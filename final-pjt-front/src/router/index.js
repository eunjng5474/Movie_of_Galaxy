import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/MovieView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LogInView.vue'
import CommunityView from '../views/CommunityView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import ArticleCreateView from '../views/ArticleCreateView.vue'
import ArticleUpdateView from '../views/ArticleUpdateView.vue'
import ProfileView from '../views/ProfileView.vue'
import MoviePopularView from '../views/MoviePopularView.vue'
import MovieVoteView from '../views/MovieVoteView.vue'
import MovieRandomView from '../views/MovieRandomView.vue'

Vue.use(VueRouter)

const routes = [

// 일단 첫화면에 로그인이 나와야함


  {
    path: '/movies',
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
    path: '/',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/movie/:id',
    name: 'MovieDetailView',
    component: MovieDetailView
  },
  {
    path: '/community/:id',
    name: 'ArticleDetailView',
    component: ArticleDetailView
  },
  {
    // 프로필
    path: '/profile/:username',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/community/create',
    name: 'ArticleCreateView',
    component: ArticleCreateView
  },
  {
    path: '/community/update/:id',
    name: 'ArticleUpdateView',
    component: ArticleUpdateView
  },
  // 알고리즘 추천
  {
    path: '/movies/popularity',
    name: 'MoviePopularView',
    component: MoviePopularView
  },
  {
    path: '/movies/voteaverage',
    name: 'MovieVoteView',
    component: MovieVoteView
  },
  {
    path: '/movies/random',
    name: 'MovieRandomView',
    component: MovieRandomView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
