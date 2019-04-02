import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import home from './components/home'
import welcome from './components/welcome'

Vue.use(Router);

const routes = [
  { path : '/', component: welcome },
  { path: '/home', component: home}
];

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
