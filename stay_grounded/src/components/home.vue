<template>

  <div class="container-fluid">
  <nav>
              <ul>
                
                <li><a><router-link to="/home/Donna" class="active">Home</router-link></a></li>
                <li><a><router-link to="/brew/Donna">Brew A Cup</router-link></a></li>
                <li><a><router-link to="/menu/Donna">Explore the Menu</router-link></a></li>
              </ul>
        </nav>
    <div id="logo-small">
      <img src="../assets/logo.png"  alt="Stay Grounded Logo Image" class="image" >
    </div>
    <div class="banner-info">

      <h5>Welcome {{ this.$route.params.userName }}!</h5>
    </div>
    <div class="main-content">
    <div class="row">
      <div class="col-md-4">
        <h2>Order History</h2>
        <p>Click any one of your past orders</p>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed" v-if="user.pastOrder1">
            <router-link to="/brew">{{ user.pastOrder1 }}</router-link></li>
          <li class="list-group-item d-flex justify-content-between lh-condensed" v-if="user.pastOrder2">
            <router-link to="/brew">{{ user.pastOrder2 }}</router-link></li>
          <li class="list-group-item d-flex justify-content-between lh-condensed" v-if="user.pastOrder3">
            <router-link to="/brew">{{ user.pastOrder2 }}</router-link></li>
        </ul>
        <p><router-link class="btn btn-outline-success my-2 my-sm-0" to="/brew" role="button">More Details >></router-link> </p>
      </div>
      <div class="col-md-4">
        <h2>Customize my drink</h2>
        <p>Try something exciting. Things you can do her... </p>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            Build a new drink</li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            Taste a different flavor</li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            Add a new topping</li>
        </ul>
        <p><router-link class="btn btn-outline-success my-2 my-sm-0" to="/buildDrink" role="button">More Details >></router-link> </p>
      </div>
      <div class="col-md-4">
        <h2>Menu - Recipes</h2>
        <p>We have a wide range of recipes.</p>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            Coffee - Freshly Brewed</li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            Tea - Exciting flavors</li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            Fresh juices</li>
        </ul>
        <p><router-link class="btn btn-outline-success my-2 my-sm-0" to="/menu" role="button">More Details >></router-link> </p>
        <router-view></router-view>
      </div>
    </div>
    </div>
  </div>
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
      showMenu(){
        console.log('Viewing menu details');
        this.$router.push('/menu');
      },
      buildYourDrink(){
        console.log('Build your own drink');
        this.$router.push('/buildDrink');
      }
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
