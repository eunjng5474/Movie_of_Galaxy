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
      console.log(res)
      this.NasaTitle = res.data.title
      this.NasaContent = res.data.explanation
      this.NasaImg = res.data.url

    })
    .catch(err => console.log(err))
    }

  }

}
</script>

<style scoped>


</style>