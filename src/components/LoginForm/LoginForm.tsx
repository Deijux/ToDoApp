'use client'

import { useForm } from 'react-hook-form'

type LoginFormData = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit: (email: string, password: string) => Promise<void>
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>()

  const submit = async (data: LoginFormData) => {
    await onSubmit(data.email, data.password)
  }

  return (
    <div className='min-h-[400px] flex items-center justify-center p-4'>
      <form
        onSubmit={handleSubmit(submit)}
        className='w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-5 transition-all'
      >
        {/* Header */}
        <div className='space-y-2 mb-2'>
          <h1 className='text-3xl font-bold text-gray-800 text-center'>
            Bienvenido
          </h1>
          <p className='text-gray-500 text-center text-sm'>
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Email */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-medium text-gray-700 ml-1'>
            Correo electrónico
          </label>
          <input
            type='email'
            placeholder='ejemplo@correo.com'
            {...register('email', { required: 'El email es obligatorio' })}
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 
          ${
            errors.email
              ? 'border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          }`}
          />
          {errors.email && (
            <span className='text-red-500 text-xs font-medium ml-1'>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-sm font-medium text-gray-700 ml-1'>
            Contraseña
          </label>
          <input
            type='password'
            placeholder='••••••••'
            {...register('password', {
              required: 'La contraseña es obligatoria',
            })}
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 
          ${
            errors.password
              ? 'border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          }`}
          />
          {errors.password && (
            <span className='text-red-500 text-xs font-medium ml-1'>
              {errors.password.message}
            </span>
          )}
          <div className='text-right'>
            <button
              type='button'
              className='text-xs text-blue-600 hover:underline'
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-black font-semibold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex justify-center items-center'
        >
          {isSubmitting ? (
            <span className='flex items-center gap-2'>
              <svg
                className='animate-spin h-5 w-5 text-white'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                  fill='none'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>
              Procesando...
            </span>
          ) : (
            'Ingresar'
          )}
        </button>
      </form>
    </div>
  )
}
