import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value){
	return value.toLowerCase();
});

Vue.filter('countFilter', (value) => `${value} (${value.length})`);

Vue.mixin({
	created(){
		console.log('global mixin - created hook')
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
