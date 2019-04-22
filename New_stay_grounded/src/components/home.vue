<script src="../router/index.js"></script>
<template>

   <b-container fluid>
    <!-- NAVBAR -->
    <nav>
      <ul>
       
        <li><a><router-link to="/home/">Home</router-link></a></li>
        <li><a><router-link to="/data"> Data</router-link></a></li>

        <li><a><router-link to="/builddrink">Brew A Cup</router-link></a></li>
        <li><a><router-link to="/lexbot">Voice Order</router-link></a></li>
      </ul>
    </nav>
    <div id= 'centerContainer'> 
    <b-img id= 'logo' :src="require('../assets/logo.png')" fluid alt="Stay Grounded Logo Image"></b-img>
   
    <div id="centerContent">
      <b-row>
        <b-col md="3">
          
          
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/data" role="button">
          <i class="material-icons">
insert_chart
</i>
<h2>Bean Stats</h2>
</router-link> 

          
        </b-col>

<!-- Next element -->
       <b-col md="3">
          
          
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/brew" role="button">
          <i class="material-icons">
build
</i>
<h2>Build A Drink</h2>
</router-link> 

          
        </b-col>

      <!-- Next element -->
     <b-col md="3">
          
          
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/lexbot" role="button">
          <i class="material-icons">
local_drink</i>
<h2>Get Nutrition Info</h2>
</router-link> 

          
        </b-col>


      </b-row>
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
