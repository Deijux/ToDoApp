import { TaskProvider } from '@/context/task.context'
import Header from '@/components/Header/Header'

export default function TasksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TaskProvider>
      <Header />
      {children}
    </TaskProvider>
  )
}
