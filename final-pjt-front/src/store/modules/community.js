import axios from 'axios'
// import router from '@/router'

const API_URL = 'http://127.0.0.1:8000'



const communityModule = {

  state: {
    articles: [],
    datailarticle: null,
  },
  getters: {
    articles: (state) => state.articles,
    detailarticle: (state) => state.detailarticle,
    isArticleAuthor: (state, getters) => {
      // state.detailarticle?을 getters로 수정함.
      // 혹시 문제 되면 다시 바꾸기,,,
      return state.detailarticle?.write_article_user.username === getters.currentUser.username
    }
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
      // console.log()
    },
    GET_ARTICLE_DETAIL(state, detailarticle) {
      // console.log(state.detailarticle)
      state.detailarticle = detailarticle
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v2/articles/`,
        // headers: {
        //   Authorization: `Token ${ context.state.token }`
        // }
      })
      .then((res) => {
        // console.log(res)
        context.commit('GET_ARTICLES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getArticleDetail(context, articleId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v2/articles/${ articleId }`,
      })
      .then((res) => {
        context.commit('GET_ARTICLE_DETAIL', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
  },
}

export default communityModule