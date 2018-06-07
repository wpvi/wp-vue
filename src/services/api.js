import axios from 'axios'
import config from '../utils/config'
const http = axios.create({
  baseURL: `${config.apiEndpoint}/${config.blogInfo.id}`
})

const api = {
  getPosts () {
    return http.get('/posts')
  }
}

export default api
