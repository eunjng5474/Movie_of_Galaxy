<template>
  <div class="nasa-page">
    <NavBar/>
      <div>
        <date-picker v-model="time1" valueType="format" @change="NasaSearch"></date-picker>
        
      </div>

      <p>{{time1}}</p>
      <h1>나사페이지</h1>
      <p>{{NasaTitle}}</p>
      <p>{{NasaContent}}</p>
      <p><img :src="NasaImg" alt=""></p>

  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
import axios from 'axios'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

const NASA_API = 'https://api.nasa.gov/planetary/apod'

export default {
  name: 'NasaView',
  components: {
    NavBar,
    DatePicker
  },

  created() {
    this.NasaSearch()
    this.Papago()
  },

  data() {
    return {
      NasaTitle: null,
      NasaContent: null,
      NasaImg: null,
      time1: null,
    }
  },
  methods: {
    NasaSearch() {
      const params = {
        api_key: 'nhHwe45zXUhw3X30y9AdHFuRZDNFgI8nW88DJH43',
        date: this.time1
      }

    axios({
      method: 'get',
      url: NASA_API,
      params
    })
    .then((res) => {
      // console.log(res)
      this.NasaTitle = res.data.title
      this.NasaContent = res.data.explanation
      this.NasaImg = res.data.url

    })
    .catch(err => console.log(err))
    },

    Papago() {
      // const client_id = 'o92CbJZ3U6s9VTRIt7yi'
      // const client_secret = '_sezYRBBhv'
      // const encText = urllib.parse.quote(this.NasaTitle)
      // const data = "source=en&target=ko&text=" + encText
      // const url = "https://openapi.naver.com/v1/papago/n2mt"
      // const request = urllib.request.Request(url)
      // request.add_header("X-Naver-Client-Id",client_id)
      // request.add_header("X-Naver-Client-Secret",client_secret)
      // const response = urllib.request.urlopen(request, data=data.encode("utf-8"))
      // const rescode = response.getcode()
      // if(rescode==200) {
      //   const response_body = response.read()
      //   print(response_body.decode('utf-8'))
      // }
      // else {
      //   print("Error Code:" + rescode)
      // }
    //   const TRANSLATE_METHODS = {
    //   nmt: 'nmt',
    //   smt: 'smt',
    // };

    //   const url = method === TRANSLATE_METHODS.smt ?
    //     'language/translate' : 'papago/n2mt';

      const params = {
        source: 'en',
        target: 'ko',
        text: this.NasaTitle,
      }

      const config = {
        baseURL: 'https://openapi.naver.com/v1/',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'x-naver-client-id': 'o92CbJZ3U6s9VTRIt7yi',
            'x-naver-client-secret': '_sezYRBBhv',
        },
      }

      axios({
        method: 'get',
        // url,
        url: 'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/',
        params,
        config
      })
      .then((res) => {
        console.log(res)
        // this.NasaTitle = res.data.title
        // this.NasaContent = res.data.explanation
        // this.NasaImg = res.data.url

      })
      .catch(err => console.log(err))
      }

  }

}
</script>

<style scoped>


</style>