'use client'

import LoginForm from '@/components/LoginForm/LoginForm'
import { useAuthContext } from '@/context/auth.context'

export default function LoginPage() {
  const { handleLogin } = useAuthContext()

  const handleSubmit = async (email: string, password: string) => {
    await handleLogin(email, password)
  }

  return <LoginForm onSubmit={handleSubmit} />
}
