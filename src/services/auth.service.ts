import { api } from '@/lib/api'
import { User } from '@/types/user'

type LoginDto = {
  email: string
  password: string
}

export const authService = {
  async login(data: LoginDto): Promise<User> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async profile(): Promise<User> {
    const response = await api.post('/auth/profile');
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },
}
