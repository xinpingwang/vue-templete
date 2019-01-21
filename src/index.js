import Vue from 'vue';
import App from './App.vue';

var app = new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render (createElement) {
    return createElement(App);
  }
}).$mount('#app');
