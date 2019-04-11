<template>
  
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
              <img src="../assets/logo.png">
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

</template>

<script>
    export default {
        name: "welcome",
        data() {
          return {
            userName: '',
            title: 'welcome',
          }
        }
    }
</script>

<style scoped>
</style>
