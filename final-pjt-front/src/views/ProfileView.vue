<template>
  <div>
    <h1>Profile</h1>
    <p><b>아이디 : {{ getCurrentUser.username }}</b></p>
    <p>닉네임 : {{ getCurrentUser.nickname }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  computed: {
    getCurrentUser() {
      return this.$store.state.currentUser
    }
    // getCurrentUserName() {
    //   console.log(this.$store.state.current_username)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_username
    // },
    // getCurrentUserNickname() {
    //   console.log(this.$store.state.current_usernickname)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_usernickname
    // }
  }
}
</script>

<style>

</style>