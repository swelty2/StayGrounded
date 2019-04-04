<template>
    <div class="container-fluid">
      <h3 align="left">Welcome {{ this.$route.params.userName }}</h3>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top img-fluid" src="../assets/beverage-caffeine-cup-905485.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Order History</h4>
              <p class="card-text">Visit your past orders with us! Choose an order..</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-if="user.pastOrder1">
                <router-link to="/brew">{{ user.pastOrder1 }}</router-link></li>
              <li class="list-group-item" v-if="user.pastOrder2">{{ user.pastOrder2 }}</li>
              <li class="list-group-item" v-if="user.pastOrder3">{{ user.pastOrder3 }}</li>
            </ul>
            <div class="card-block">
              <a href="#" class="card-link">Card link</a>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="col-sm-4">

          <div class="card">
            <img class="card-img-top img-fluid" src="../assets/coffee-cup-1.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Customize my drink</h4>
              <p class="card-text">Want to try something new?</p>
            </div>
           <div class="card-block">
              <a href="#" class="card-link">Card link</a>
            </div>
          </div>

        </div>
          <!-- Card 3 -->
          <div class="col-sm-4">

            <div class="card" @click="showMenu">
              <img class="card-img-top img-fluid" src="../assets/bowl-breakfast-calcium-414262.jpg" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">View Our Menu</h4>
                <p class="card-text">Check our Recipes</p>
              </div>
              <div class="card-block">
                <a href="#" class="card-link">Card link</a>
              </div>
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

          /*console.log('Getting inside the created method');
          fetch('http://localhost:3000/drinks/Cappuccino', {
              method: 'GET',
              mode: 'no-cors'
            },
            {
              mode: 'no-cors'
            })
            .then(response => response.json())
            .then(json => this.drinks = json)
            .catch(err => this.error = err);*/
      }
    }
</script>

<style scoped>

</style>
