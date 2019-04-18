<script src="../router/index.js"></script>
<template>

   <b-container fluid>
    <!-- NAVBAR -->
    <nav>
      <ul>
       
        <li><a><router-link to="/home/Donna">Home</router-link></a></li>
        <li><a><router-link to="/data"> Data</router-link></a></li>

        <li><a><router-link to="/menu">Brew A Cup</router-link></a></li>
        <li><a><router-link to="/speechform">Voice Order</router-link></a></li>
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
<p><h2>Bean Stats</h2>
</router-link> 
          </p>
          
        </b-col>

<!-- Next element -->
       <b-col md="3">
          
          
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/menu" role="button">
          <i class="material-icons">
build
</i>
<p><h2>Build A Drink</h2>
</router-link> 
          </p>
          
        </b-col>

      <!-- Next element -->
     <b-col md="3">
          
          
          <router-link class="btn btn-outline-success my-2 my-sm-0" to="/speechform" role="button">
          <i class="material-icons">
local_drink</i>
<p><h2>Get Nutrition Info</h2>
</router-link> 
          </p>
          
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
    },
    created(){
      console.log(this.$route.params.userName);
      for(let i=0; i<= users.length; i++){
        console.log('User Input :', users[i]);
        if(this.$route.params.userName === users[i].userName){
          this.user = users[i];
        }
      }
    }
  }
</script>
<style scoped>
</style>
