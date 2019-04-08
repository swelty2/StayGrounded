import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import home from './components/home'
import welcome from './components/welcome'
import menu from './components/menu'
import brew from './components/brew'
import design from './components/design'
import coffeeChart from './components/coffee-chart'
import teaChart from './components/tea-chart'
import VueApexCharts from 'vue-apexcharts'

Vue.use(Router);
Vue.component('apexchart', VueApexCharts);

const routes = [
  { path : '/', component: welcome },
  { path: '/home', component: home},
  { path: '/home/:userName', component: home},
  { path: '/menu', component: menu},
  { path: '/brew/:drinkName', component: brew},
  { path: '/buildDrink', component: design},
  { path: '/coffee-chart', component: coffeeChart},
  { path: '/tea-chart', component: teaChart}
];

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
