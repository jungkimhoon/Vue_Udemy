import Vue from 'vue'
import App from './App.vue'

// Vue.component('header-cmp', header);
// Vue.component('footer-cmp', footer);
// Vue.component('body-cmp', body);
export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
