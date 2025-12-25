import { router } from '@/router'
import { clientFetch } from '../clientFetch'

class AuthService {
  #token = null
  isLoggedIn() {
    return Boolean(localStorage.getItem('token'))
  }

  getToken() {
    return this.#token
  }
  setToken(token) {
    localStorage.setItem('token', token)
    this.#token = token
  }

  clearToken() {
    this.#token = null
    localStorage.removeItem('token')
    clientFetch.defaults.headers.common.Authorization = ''
  }

  async login(body) {
    const res = await clientFetch.post('/user/login', body)
    const { accessToken } = res.data
    console.log(accessToken)
    this.setToken(accessToken)
  }

  async register(body) {
    const res = await clientFetch.post('/user/register', body)
    const { accessToken } = res.data
    this.setToken(accessToken)
  }

  async logout() {
    await clientFetch.get('/user/logout')
    this.clearToken()
  }

  async refresh() {
    const res = await clientFetch.post('/user/refresh')
    const { accessToken } = res.data

    this.setToken(accessToken)
  }
}

export const authService = new AuthService()

clientFetch.interceptors.request.use((request) => {
  const token = authService.getToken()

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  return request
})

clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error.response.status

    if (errorCode === 401) {
      try {
        return await authService.refresh()
      } catch (e) {
        router.push('/user/login')
        return Promise.reject(e)
      }
    }

    return Promise.reject(error)
  },
)
