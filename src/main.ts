import Vue from 'vue';
import App from './App.vue';
import router from './router'

let app = new Vue({
  router: router,
  render: function (createElement) {
    return createElement(App);
  }
});

app.$mount('#app');
