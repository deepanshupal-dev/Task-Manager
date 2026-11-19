import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/'

const api = axios.create({ baseURL: BASE_URL })

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config
    const refresh = localStorage.getItem('refresh')

    if (
      error.response?.status === 401 &&
      !original._retry &&
      !original.url.includes('login/') &&
      refresh
    ) {
      original._retry = true
      try {
        const res = await axios.post(`${BASE_URL}token/refresh/`, { refresh })
        localStorage.setItem('access', res.data.access)
        original.headers.Authorization = `Bearer ${res.data.access}`
        return api(original)
      } catch (err) {
        localStorage.clear()
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api