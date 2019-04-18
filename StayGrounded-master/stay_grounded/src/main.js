import Vue from 'vue'
import Router from 'vue-router'
import BootStrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

import App from './App'
import home from './components/home'
import welcome from './components/welcome'
import menu from './components/menu'
import brew from './components/brew'
import design from './components/design'
import data from './components/data'
import speechform from './components/speechform'
import Carousel from 'bootstrap-vue/es/components/carousel'

Vue.use(Carousel)

Vue.use(Router);
Vue.component('apexchart', VueApexCharts);
Vue.use(BootStrapVue);

const routes = [
  { path : '/', component: welcome },
  { path: '/home', component: home},
  { path: '/home/:userName', component: home},
  { path: '/menu', component: menu},
  { path: '/brew', component: brew},
  { path: '/brew/:drinkName', component: brew},
  { path: '/buildDrink', component: design},
  { path: '/data', component: data},
  { path: '/speechform', component: speechform}

];

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
