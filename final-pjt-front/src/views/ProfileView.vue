<template>
  <div>
    <h1>Profile</h1>
    <router-view></router-view>
    <p><b>아이디 : {{ getCurrentUser }}</b></p>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  computed: {
    getCurrentUser() {
      console.log(this.$store.state.current_username)
      // console.log(this.$store.state.token)
      return this.$store.state.current_username
    }
  }
}
</script>

<style>

</style>