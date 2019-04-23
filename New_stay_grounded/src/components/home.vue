<script src="../router/index.js"></script>
<template>

   <b-container fluid>
      <!-- NAVBAR -->
      <nav>
          <ul>
            <li><a><router-link to="/home/" class="active">Home</router-link></a></li>
            <li><a><router-link to="/data"> Data</router-link></a></li>
            <li><a><router-link to="/builddrink">Brew A Cup</router-link></a></li>
            <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
          </ul>
      </nav>
      <div id= 'centerContainer'>
         <!-- LOGO -->
         <div class="content-row">
           <div id="logo">
             <img src="../assets/logo.png">
           </div>
         </div>
        <div id="home-content">
              
            <!-- BEAN DATA -->
            <router-link class="btn btn-outline-danger option" to="/data" role="button">        
                <img src="../assets/data.png">
                <h2>Drink Data </h2>
             </router-link> 
            
            <!-- BUILD A DRINK -->  
            <router-link class="btn btn-outline-success option" to="/builddrink" role="button">
                <img src="../assets/brew.png">
                <h2>Brew</h2>
             </router-link> 
              
            <!-- LEXBOT -->
            <router-link class="btn btn-outline-primary option" to="/lexbot" role="button">
                <img src="../assets/audio.png">
                <h2>Voice Order</h2>
             </router-link> 
  
        
        </div>
      </div>
   </b-container>

</template>
<script>
  import users from '../data/users'
  export default {
    name: "home",
    data() {
      return {
        title_home: 'Home screen',
        drinks: {},
        user: {},
        error: {}
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>
