'use client'

import LoginForm from '@/components/LoginForm/LoginForm'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const { login } = useAuth()

  const handleSubmit = async (email: string, password: string) => {
    await login(email, password)
  }

  return <LoginForm onSubmit={handleSubmit} />
}
