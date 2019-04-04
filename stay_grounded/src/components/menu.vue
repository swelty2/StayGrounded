<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <!--Accordion wrapper-->
    <div class="accordion md-accordion accordion-1" id="accordionEx23" role="tablist"   v-for="drink in drinks">
      <div class="card">
        <div class="card-header blue lighten-3 z-depth-1" role="tab" id="heading96">
          <h5 class="text-uppercase mb-0 py-1">
            <a class="white-text font-weight-bold" data-toggle="collapse" href="#collapse96" aria-expanded="true"
               aria-controls="collapse96">
              {{ drink.drinkName }} | {{ drink.milk}}
            </a>
          </h5>
        </div>
        <div id="collapse96" class="collapse show" role="tabpanel" aria-labelledby="heading96" data-parent="#accordionEx23">
          <div class="card-body">
            <div class="row my-4">
              <div class="col-md-8">
                <h2 class="font-weight-bold mb-3 black-text">Ingredient</h2>
               <!--<p class="">
                  {{ drink.flavor}}
                  {{ drink.toppings }}-->
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{{ drink.flavor }}</li>
                  <li class="list-group-item">{{ drink.toppings }}</li>
                </ul>
              <!-- </p> -->
              </div>
              <div class="col-md-4 mt-3 pt-2">
                <div class="view z-depth-1">
                  <img src="../assets/coffee-bean.jpg" alt="" class="rounded-lg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--Accordion wrapper-->
    <dl class="dl-horizontal" v-for="drink in drinks">
      <dt>{{ drink.drinkName }}</dt>
      <dd>{{ drink.drinkType }} - {{drink.flavor}}</dd>
    </dl>
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
