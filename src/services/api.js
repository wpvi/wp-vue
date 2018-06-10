import axios from 'axios'
const http = axios.create({
  baseURL: `/api/${process.env.VUE_APP_BLOG_ID}`
})

const api = {
  getPosts (params = {}) {
    return http.get('/posts', {
      params: params
    })
  },
  getPostBySlug (slug) {
    return http.get(`/posts/slug:${slug}`)
  }
}

export default api
