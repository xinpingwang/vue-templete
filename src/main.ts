import Vue from 'vue';
import App from './App.vue';

let app = new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render(createElement) {
    return createElement(App);
  }
});

app.$mount('#app');
