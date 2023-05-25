<template>
  <div class="nasa-page" style="background-color: black; background-size: cover;">
    <NavBar/>
      <div>
        <date-picker v-model="time1" valueType="format" @change="NasaSearch" placeholder="날짜를 선택하세요"></date-picker>
      </div>
      <br>
      <div class="nasa-text" style="width: 70%; margin: 0 auto;">
        <h3 class="mt-2" style="color: white">{{time1}}의 우주를 소개합니다</h3>
        <h5 style="color: gray;">원하는 날짜를 선택해보세요</h5>
        <!-- <h1>나사페이지</h1> -->
        <h3 style="color: white; margin-top: 40px;">{{NasaTitle}}</h3>
        <h5 v-if="!TranslateContent" class="lh-base mt-5" style=" color: white;">{{NasaContent}}</h5>
        <h5 v-else class="lh-base mt-5" style=" color: white;">{{TranslateContent}}</h5>

        <div v-if="NasaImg">
          <div class="d-flex justify-content-center" style="margin-top: 20px;">
            <img src="@/assets/ufo1.png" alt="" style="width:50px; height:50px; margin-right: 10px;">
            <button @click="Translate(NasaContent)" class="btn btn-outline-light">한글로 번역</button>
          </div>

          <img class="mt-5" style="width: 100%; height: auto; margin-bottom: 100px;" :src="NasaImg" alt="">
        </div>
        <div v-else style="background-color:black; height:100vh">
          <img src="@/assets/loading.gif" class="loadImg">

          </div>
      </div>

  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
import axios from 'axios'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

const NASA_API = 'https://api.nasa.gov/planetary/apod'
const GOOGLE_API = 'https://translation.googleapis.com/language/translate/v2'
export default {
  name: 'NasaView',
  components: {
    NavBar,
    DatePicker
  },

  created() {
    this.NasaSearch()
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.time1 = `${year}-${month}-${day}`;
  },

  data() {
    return {
      NasaTitle: null,
      NasaContent: null,
      NasaImg: null,
      currentDate:null,
      time1: null,
      TranslateTitle:null,
      TranslateContent:null,
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
      this.TranslateContent = null

    })
    .catch(err => console.log(err))
    },

    Translate(text) {
      const params = {
        key: 'AIzaSyD_Do3J-6gCWngJaayvFjUuwnJWm6nD0uU',
        q: text,
        target: 'ko'
      }
      axios({
        method: 'POST',
        url:GOOGLE_API,
        params
      })
      .then((res) => {
        // console.log(res.data)
        // console.log(res.data.data)
        // console.log(res.data.data.translations[0].translatedText)
        this.TranslateContent = res.data.data.translations[0].translatedText
      })

      .catch((err) => console.log(err))

    }

  

  }
}
// }
</script>

<style scoped>

</style>