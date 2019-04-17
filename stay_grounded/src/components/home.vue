<template>

   <b-container fluid>
    <b-img id= 'logo' :src="require('../assets/logo.jpg')" fluid alt="Stay Grounded Logo Image"></b-img>
    <b-jumbotron>
      <h3 slot="header">Welcome {{ this.$route.params.userName }}</h3>
      <p> You have a variety of options there!!! Grab one from your past orders ||
        Explore our menu options || Have some time?? Build your own drink</p>
    </b-jumbotron>
    <div>
      <b-row>
        <b-col md="4">
          <h2>Order History</h2>
          <p>Click any one of your past orders</p>
          <b-list-group>
            <b-list-group-item v-if="user.pastOrder1">
              <router-link to="/brew">{{ user.pastOrder1 }}</router-link>
            </b-list-group-item>
            <b-list-group-item v-if="user.pastOrder2">
              <router-link to="/brew">{{ user.pastOrder2 }}</router-link>
            </b-list-group-item>
            <b-list-group-item v-if="user.pastOrder3">
              <router-link to="/brew">{{ user.pastOrder3 }}</router-link>
            </b-list-group-item>
          </b-list-group>
          <div>
          <p><router-link class="btn btn-outline-success my-2 my-sm-0" to="/menu" role="button">More Details >></router-link> </p>
          </div>
        </b-col>

<!-- Next element -->
        <b-col md="4">
          <h2>Customize my drink</h2>
          <p>Try something exciting....</p>
          <b-list-group>
            <b-list-group-item>Build a new drink</b-list-group-item>
            <b-list-group-item>Taste a different flavor</b-list-group-item>
            <b-list-group-item>Add a new topping</b-list-group-item>
          </b-list-group>
          <div>
            <p><router-link class="btn btn-outline-success my-2 my-sm-0" to="/buildDrink" role="button">More Details >></router-link> </p>
          </div>
        </b-col>

      <!-- Next element -->
        <b-col md="4">
          <h2>Menu - Recipes</h2>
          <p>We have a wide range of recipes</p>
          <b-list-group>
            <b-list-group-item>Coffee- Freshly brewed</b-list-group-item>
            <b-list-group-item>Tea - Exciting flavors</b-list-group-item>
            <b-list-group-item>Fresh juices</b-list-group-item>
          </b-list-group>
          <div>
            <p><router-link class="btn btn-outline-success my-2 my-sm-0" to="/menu" role="button">More Details >></router-link> </p>
          </div>
        </b-col>
      </b-row>
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
