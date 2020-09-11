import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-e345c.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'auth'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
	console.log('request', config)
	return config
})

const resInterceptor = axios.interceptors.response.use(res => {
	console.log('response', res)
	return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.request.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
