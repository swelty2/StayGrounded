<template>

  <!-- Page Content -->
  <div class="container">

    <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Back>>Menu - Recipes</h1>

    <hr class="mt-2 mb-5">

    <div class="row text-center text-lg-left">

      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/aroma-aromatic-art-434213.jpg" alt="">
          <router-link to="/brew/Cappuccino" class="figure-caption text-center">Cappuccino</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/mocha-latte.jpg" alt="">
          <router-link to="/brew/Mocha Latte" class="figure-caption text-center">Mocha Latte</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/mexican-hot-chocolate-recipe.jpg" alt="">
          <router-link to="/brew/Hot Chocolate" class="figure-caption text-center">Hot Chocolate</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/americano.jpg" alt="">
          <router-link to="/brew/Americano" class="figure-caption text-center">Americano</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/chai-latte.jpg" alt="">
          <router-link to="/brew/Chai Latte" class="figure-caption text-center">Chai Latte</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/green-tea.png" alt="">
          <router-link to="/brew/Green Tea Latte" class="figure-caption text-center">Green Tea Latte</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/herbal-tea.jpg" alt="">
          <router-link to="/brew/Herbal Tea" class="figure-caption text-center">Herbal Tea</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/herbal-mint-tea.jpg" alt="">
          <router-link to="/brew/Mint Tea" class="figure-caption text-center">Mint Tea</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/lemonade.jpg" alt="">
          <router-link to="/brew/Lemonade" class="figure-caption text-center">Lemonade</router-link>
        </a>
      </div>
      <div class="col-lg-3 col-md-4 col-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../assets/fresh-smoothies.jpg" alt="">
          <router-link to="/brew/Seasoned Smoothies" class="figure-caption text-center">Seasoned Smoothies</router-link>
        </a>
      </div>
    </div>

  </div>

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
