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
import MovieStarView from '../views/MovieStarView.vue'
import MovieSearchView from '../views/MovieSearchView.vue'
import NasaView from '../views/NasaView.vue'
import HeroView from '../views/HeroView.vue'
import StartView from '../views/StartView.vue'

import NotFound404View from '../views/NotFound404View.vue'

import store from '../store/index'


Vue.use(VueRouter)

const routes = [


  //시작 페이지
  {
    path: '/',
    name: 'StartView',
    component: StartView

  },


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
    path: '/login',
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
  },
  {
    path: '/movies/star',
    name: 'MovieStarView',
    component: MovieStarView
  },
  // 검색
  {
    path: '/movies/search/:keyword',
    name: 'MovieSearchView',
    component: MovieSearchView
  },

  // 나사
  {
    path: '/nasa',
    name: 'NasaView',
    component: NasaView
  },
  
  // 히어로
  {
    path: '/hero',
    name: 'HeroView',
    component: HeroView
  },

  // 404 - 제일 마지막
  {
    path: '/404',
    name: 'NotFound404View',
    component: NotFound404View
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const isLoggedIn = store.getters.isLogin

  const allowAuthPages = ['StartView','LogInView', 'SignupView']

  const isAuthRequired = !allowAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('로그인을 해야 서비스를 이용할 수 있습니다.')
    next({name: 'LogInView'})
  } else {
    next()
  } 

})

export default router
