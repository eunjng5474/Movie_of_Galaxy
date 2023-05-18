import axios from 'axios'
// import router from '@/router'

const API_URL = 'http://127.0.0.1:8000'



const communityModule = {

  // plugins: [
  //   createPersistedState(),
  // ],
  state: {
    articles: [],
    token: null,
  },
  getters: {
    // isLogin(state) {
      //   return state.token ? true : false
      // }
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      this.state.articles = articles
      console.log()
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
    }
  },
}

export default communityModule