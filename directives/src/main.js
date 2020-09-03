import Vue from 'vue'
import App from './App.vue'


// global directive
Vue.directive('highlight',{
	bind(el, binding, vnode){
		// el.style.backgroundColor = 'green';
		// el.style.backgroundColor = binding.value;
		var delay = 0;
		if(binding.modifiers['delayed']){
			delay = 3000;
		}
		setTimeout(() => {
			if(binding.arg == 'background'){
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		} , delay)
	}
}); //v-highlight
//새로운 directive를 생성
new Vue({
  el: '#app',
  render: h => h(App)
})
