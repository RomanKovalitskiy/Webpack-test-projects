import './js/common.js';
import './assets/css/main.css';
import './assets/scss/main.scss';
import store from './store';

window.Vue = require('vue');

Vue.component('example-component', require('./components/Example.vue').default);

const app = new Vue({
  store,
  el: '#app',
});
