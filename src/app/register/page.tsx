'use client'

import RegisterForm from '@/components/RegisterForm/RegisterForm'
import { useAuthContext } from '@/context/auth.context'

export default function RegisterPage() {
  const { handleRegister } = useAuthContext()

  const handleSubmit = async (email: string, password: string, firstName: string, lastName: string) => {
    await handleRegister(email, password, firstName, lastName)
  }

  return <RegisterForm onSubmit={handleSubmit} />
}
