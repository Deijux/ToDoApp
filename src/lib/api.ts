import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  response => response,
  async error => {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response
      const { pathname } = window.location

      if (status === 401 && pathname !== '/login') {
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {}, { withCredentials: true })
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
