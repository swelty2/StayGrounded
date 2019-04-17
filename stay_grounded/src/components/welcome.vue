<template>
  <b-container>
    <!-- NAVBAR -->
    <nav>
      <ul>
        <li><a><router-link to="/welcome/Donna" class="active">Welcome!</router-link></a></li>
        <li><a><router-link to="/home/Donna">Home</router-link></a></li>
        <li><a><router-link to="/brew/Donna">Brew A Cup</router-link></a></li>
        <li><a><router-link to="/menu/Donna">Explore the Menu</router-link></a></li>
      </ul>
    </nav>

    <!-- LOGO -->
    <div class="content-row">
      <div id="logo">
        <img src="../assets/logo.jpg">
      </div>
    </div>

    <h5> A Curated Coffee Experience</h5>
    <br/>

    <div class="content-row" id="login-info">
      <form >


        <label class="sr-only">User Name</label>
        <input v-model="userName" class="form-control" id="userName" placeholder="Enter Your Name">

      </form>


    </div>
    <div class="content-row" id="explore">
      <button><router-link class="explore-button"  to="/home/Donna">Click to Explore</router-link></button>
    </div>

    <router-view></router-view>
  </b-container>

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
