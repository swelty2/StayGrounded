import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import home from './components/home'
import welcome from './components/welcome'
import menu from './components/menu'
import brew from './components/brew'

Vue.use(Router);

const routes = [
  { path : '/', component: welcome },
  { path: '/home', component: home},
  { path: '/home/:userName', name: 'home', component: home},
  { path: '/menu', component: menu},
  { path: '/brew', component: brew}
];

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
