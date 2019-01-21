import Vue from 'vue';

var app = new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render (createElement) {
    return createElement('div', this.message);
  }
}).$mount('#app');
