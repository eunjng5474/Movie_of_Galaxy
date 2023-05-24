<template>
  <div class="nasa-page">
    <NavBar/>
      <div>
        <el-date-picker 
          v-model="startDate" 
          type="date" 
          placeholder="시작일" 
          value-format="yyyyMMdd" 
          
          :picker-options="startDateOptions" 
          ></el-date-picker>
      </div>
      <h1>나사페이지</h1>
      <p>{{NasaTitle}}</p>
      <p>{{NasaContent}}</p>
      <p><img :src="NasaImg" alt=""></p>

  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
import axios from 'axios'

const NASA_API = 'https://api.nasa.gov/planetary/apod'

export default {
  name: 'NasaView',
  components: {
    NavBar
  },

  created() {
    this.NasaSearch()
  },

  data() {
    return {
      NasaTitle: null,
      NasaContent: null,
      NasaImg: null,
    }
  },
  methods: {
    NasaSearch() {
      const params = {
        api_key: 'nhHwe45zXUhw3X30y9AdHFuRZDNFgI8nW88DJH43',
        date: '1997-02-28'
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

<style>

</style>