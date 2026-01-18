import { api } from '@/lib/api'
import { User } from '@/types/user'

type LoginDto = {
  email: string
  password: string
}

export const authService = {
  login(data: LoginDto): Promise<User> {
    return api.post('/auth/login', data)
  },

  profile(): Promise<User> {
    return api.post('/auth/profile')
  },

  logout() {
    return api.post('/auth/logout')
  },
}
