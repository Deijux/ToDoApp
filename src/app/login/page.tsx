'use client'

import LoginForm from '@/components/LoginForm/LoginForm'
import { useAuthContext } from '@/context/auth.context'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const { handleLogin } = useAuthContext()

  const handleSubmit = async (email: string, password: string) => {
    await handleLogin(email, password)
  }

   const redirectToRegister = () => {
    router.push('/register')
  }

  return <LoginForm onSubmit={handleSubmit} redirectToRegister={redirectToRegister} />
}
