import axios from 'axios'
import config from '../utils/config'
const http = axios.create({
  baseURL: `${config.apiEndpoint}/${config.blogInfo.id}`
})

const api = {
  getPosts (params = {}) {
    return http.get('/posts', {
      params: params
    })
  }
}

export default api
