import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To Do App',
  description:
    'To Do App es un software para la gestión de tus tareas diarias, puedes crear, editar el estado, y eliminar tus tareas!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es-CO'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
