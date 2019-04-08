<template>

  <div class="container">
    <img src=
           "../assets/logo.jpg"  alt="Stay Grounded Logo Image" class="image" >
    <div class="middle">
      <div class="text">
        <router-link class="text"  to="/home/Donna">Explore</router-link>
        <router-view></router-view></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "welcome",
    data() {
      return {
        userName: '',
        title : 'Stay Grounded - A unique experience'
      }
    }
  }
</script>

<style scoped>
</style>
