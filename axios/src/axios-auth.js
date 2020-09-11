import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://vuejs-http-e345c.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance