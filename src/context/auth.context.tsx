'use client'

import { useAuth } from '@/hooks/useAuth'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { User } from '@/types/user'

export const AuthContext = createContext<{
  user: User | null
  handleLogin: (email: string, password: string) => Promise<void>
  handleLogout: () => Promise<void>
}>({
  user: null,
  handleLogin: async () => {},
  handleLogout: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const { profile, login, logout } = useAuth()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userProfile = await profile()
        setUser(userProfile || null)
      } catch {
        setUser(null)
      }
    }
    fetchUser()
  }, [profile])

  const handleLogin = async (email: string, password: string) => {
    const userLogged = await login(email, password)
    setUser(userLogged || null)
    window.location.href = '/tasks'
  }

  const handleLogout = async () => {
    await logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
