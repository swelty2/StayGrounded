<template>
  <b-container>
    <div>
      <h2><b-badge>Menu - Recipes</b-badge></h2>
      <hr class="mt-2 mb-5">
    </div>

    <div>
      <b-row>
        <!-- Item 1 -->
        <b-col lg="3" md="4" cols="6">
            <b-link href="#" >
              <b-img class="img-fluid img-thumbnail" :src="require('../assets/aroma-aromatic-art-434213.jpg')" alt=""></b-img>
              <router-link to="/brew/Cappuccino" class="figure-caption text-center">Cappuccino</router-link>
            </b-link>
        </b-col>
        <!-- Item 2 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/mocha-latte.jpg')" alt=""></b-img>
            <router-link to="/brew/MochaLatte" class="figure-caption text-center">Mocha Latte</router-link>
          </b-link>
        </b-col>
        <!-- Item 3 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/mexican-hot-chocolate-recipe.jpg')" alt=""></b-img>
            <router-link to="/brew/HotChocolate" class="figure-caption text-center">Hot Chocolate</router-link>
          </b-link>
        </b-col>
        <!-- Item 4 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/americano.jpg')" alt=""></b-img>
            <router-link to="/brew/Americano" class="figure-caption text-center">Americano</router-link>
          </b-link>
        </b-col>
        <!-- Item 5 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/chai-latte.jpg')" alt=""></b-img>
            <router-link to="/brew/ChaiLatte" class="figure-caption text-center">Chai Latte</router-link>
          </b-link>
        </b-col>
        <!-- Item 6 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/green-tea.png')" alt=""></b-img>
            <router-link to="/brew/GreenTeaLatte" class="figure-caption text-center">Green Tea Latte</router-link>
          </b-link>
        </b-col>
        <!-- Item 7 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/herbal-tea.jpg')" alt=""></b-img>
            <router-link to="/brew/HerbalTea" class="figure-caption text-center">Herbal Tea</router-link>
          </b-link>
        </b-col>
        <!-- Item 8 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/herbal-mint-tea.jpg')" alt=""></b-img>
            <router-link to="/brew/MintTea" class="figure-caption text-center">Mint Tea</router-link>
          </b-link>
        </b-col>
        <!-- Item 9 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/lemonade.jpg')" alt=""></b-img>
            <router-link to="/brew/Lemonade" class="figure-caption text-center">Lemonade</router-link>
          </b-link>
        </b-col>
        <!-- Item 10 -->
        <b-col lg="3" md="4" cols="6">
          <b-link href="#" >
            <b-img class="img-fluid img-thumbnail" :src="require('../assets/fresh-smoothies.jpg')" alt=""></b-img>
            <router-link to="/brew/Smoothies" class="figure-caption text-center">Seasoned Smoothies</router-link>
          </b-link>
        </b-col>
      </b-row>
    </div>
  </b-container>
  <!-- Page Content -->

</template>

<script>
  import menu from '../data/menu'
    export default {
        name: "menu",
        data() {
          return {
            title: "Recipe Index",
            drinks: {}
          }
        },
        created() {
          this.drinks = menu;
          console.log('The drink list are : ', this.drinks.length);
        }
    }
</script>

<style scoped>

</style>
