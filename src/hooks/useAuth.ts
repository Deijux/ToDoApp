'use client'

import { useCallback } from 'react'
import { authService } from '@/services/auth.service'
import { handleAxiosError } from '@/utils/error.handler'

export function useAuth() {
  const login = useCallback(async (email: string, password: string) => {
    try {
      const userLogged = await authService.login({ email, password })
      return userLogged
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al iniciar sesión'))
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await authService.logout()
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al cerrar sesión'))
    }
  }, [])

  const register = useCallback(async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      const userRegistered = await authService.register({ email, password, firstName, lastName })
      return userRegistered
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al registrar usuario'))
    }
  }, [])

  const profile = useCallback(async () => {
    try {
      const userProfile = await authService.profile()
      return userProfile
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al obtener el perfil'))
    }
  }, [])

  return {
    login,
    logout,
    register,
    profile,
  }
}
