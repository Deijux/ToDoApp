import { api } from "@/lib/api"

type LoginDto = {
  email: string
  password: string
}

export const authService = {
  login(data: LoginDto) {
    return api.post('/auth/login', data)
  },

  profile() {
    return api.get('/auth/profile')
  },

  logout() {
    return api.post('/auth/logout')
  },
}
