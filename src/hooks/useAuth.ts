'use client'

import { useEffect, useState, useCallback } from 'react'
import { authService } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type User = {
  id: string
  email: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    authService
      .profile()
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
  }, [])

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const userLogged = await authService.login({ email, password })
        setUser(userLogged.data)
        router.push('/tasks')
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data?.message || 'Error al iniciar sesión'
          throw new Error(message)
        }
        throw new Error('Error inesperado')
      }
    },
    [router],
  )

  const logout = useCallback(async () => {
    await authService.logout()
    setUser(null)
  }, [])

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  }
}
