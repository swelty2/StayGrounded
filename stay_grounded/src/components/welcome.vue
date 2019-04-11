<template>
<<<<<<< HEAD
  
    <div class="container">
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
              <img src="../assets/stay-grounded-logo.png">
          </div>
      </div>
      
      <h4> What's in your cup?</h4>
      <br/>
      
      <div class="content-row" id="login-info">
          <form >
            
              
              <label class="sr-only">User Name</label>
              <input v-model="userName" class="form-control" id="userName" placeholder="Enter Your Name To Explore">
            
          </form>
          
          
      </div>
      <div class="content-row" id="explore">
            <button><router-link class="explore-button"  to="/home/Donna">Click to Explore</router-link></button>
      </div>
      
          
      
      
      
      
      <router-view></router-view>
      <!--<figure class="figure">
        <img src="../assets/aroma-aromatic-art-434213.jpg" class="figure-img rounded-circle" alt="A generic square placeholder image with rounded corners in a figure.">
        <figcaption class="figure-caption text-center">Freshly brewed</figcaption>
      </figure>-->
    </div>
=======

  <div class="container">
    <img src=
           "../assets/logo.jpg"  alt="Stay Grounded Logo Image" class="image" >
    <div class="middle">
      <div class="text">
        <router-link class="text"  to="/home/Donna">Explore</router-link>
        <router-view></router-view></div>
    </div>
  </div>
>>>>>>> refs/remotes/origin/master

</template>

<script>
<<<<<<< HEAD
    export default {
        name: "welcome",
        data() {
          return {
            userName: ''
          }
        }
=======
  export default {
    name: "welcome",
    data() {
      return {
        userName: '',
        title : 'Stay Grounded - A unique experience'
      }
>>>>>>> refs/remotes/origin/master
    }
  }
</script>

<style scoped>
</style>
