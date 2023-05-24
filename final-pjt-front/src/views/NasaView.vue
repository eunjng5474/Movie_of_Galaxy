<template>
  <div class="nasa-page" style="background-color: black;">
    <NavBar/>
      <div>
        <date-picker v-model="time1" valueType="format" @change="NasaSearch" placeholder="날짜를 선택하세요"></date-picker>
      </div>
      <div class="nasa-text" style="width: 70%; margin: 0 auto;">
        <h3 class="mt-2" style="color: white">{{time1}}</h3>
        <!-- <h1>나사페이지</h1> -->
        <h3 class="mt-4" style="color: white">{{NasaTitle}}</h3>
        <h5 class="lh-base mt-5" style=" color: white;">{{NasaContent}}</h5>
        <p class="mt-5"><img :src="NasaImg" alt=""></p>
      </div>

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
    // this.Papago()
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
      // const search = (keyword) => {
      //   return axios.create({
      //     baseURL = 'https://openapi.naver.com/v1/papago/n2mt',
      //     Headers: {
      //       "X-Naver-Client-Id" : client_id,
      //       "X-Naver-Client-Secret" : client_secret,
      //     },
      //     params : {
      //       source: 'en',
      //       target: 'ko',
      //       text: this.NasaTitle,
      //     }
      //   })
      // }

      // async function papago() {
      //   try {
      //     const res = await search(this.NasaTitle).get();
      //     console.log(res.data)
      //   } catch (err) {
      //     console.log(err)
      //   }
      // }


      // const request = require("request");
      // const express = require('express')
      // const app = express();

      // const papago_api = "https://openapi.naver.com/v1/papago/n2mt"
      // const client_id = 'o92CbJZ3U6s9VTRIt7yi'
      // const client_secret = '_sezYRBBhv'
      // const query = this.NasaTitle

      // const options = {
      //   url: papago_api,
      //   form: { source: 'en', target: 'ko', text: query },
      //   Headers: {
      //     "X-Naver-Client-Id" : client_id,
      //     "X-Naver-Client-Secret" : client_secret,
      //   }
      // }

      // request.post(options, function (error, response, body) {
      //   if (!error && response.statusCode == 200) {
      //     console.log(JSON.parse(body))
      //   } else {
      //     console.log("error = " + response.statusCode)
      //   }
      // })


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

      // const url = method === TRANSLATE_METHODS.smt ?
        // 'language/translate' : 'papago/n2mt';

/// 401 error
      const params = {
        source: 'en',
        target: 'ko',
        text: 'hello, world!'
        // text: this.NasaTitle,
      }

      // console.log(this.NasaTitle)
      // const config = {
      //   // baseURL: 'https://openapi.naver.com/v1/papago/n2mt',
      //   headers: {
      //       'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      //       'x-naver-client-id': 'o92CbJZ3U6s9VTRIt7yi',
      //       'x-naver-client-secret': '_sezYRBBhv',
      //   },
      // }

      axios({
        method: 'post',
        // url,
        url: 'https://openapi.naver.com/v1/papago/n2mt',
        // url: 'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/papago/n2mt',
        params,
        headers: {
        // 'User-Agent': 'curl/7.49.1',
        // 'Accept': '*/*',
        // 'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',  
        'X-Naver-Client-Id': '',
        'X-Naver-Client-Secret': '',
        },
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
// }
</script>

<style scoped>


</style>