import { TaskProvider } from '@/context/task.context'

export default function TasksLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <TaskProvider>{children}</TaskProvider>
}
