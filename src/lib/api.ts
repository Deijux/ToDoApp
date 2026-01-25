import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_ENV === 'development'
  ? process.env.NEXT_PUBLIC_API_URL_DEV || 'http://localhost:3000/api'
  : process.env.NEXT_PUBLIC_API_URL || ''

const ignorePaths = ['/login', '/register']

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  response => response,
  async error => {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response
      const { pathname } = window.location

      if (status === 401 && !ignorePaths.includes(pathname)) {
        try {
          await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true })
        } catch (error) {
          console.error('Error during logout request:', error)
        } finally {
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  },
)
