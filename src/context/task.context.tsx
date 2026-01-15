'use client'

import {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Task } from '@/types/task'
import { useTasks } from '@/hooks/useTasks'

export const TaskContext = createContext<{
  pendingTasks: Task[]
  completedTasks: Task[]
  handleAddTask: (title: string) => Promise<void>
  handleUpdateStatus: (id: string) => Promise<void>
  handleDeleteTask: (id: string) => Promise<void>
}>({
  pendingTasks: [],
  completedTasks: [],
  handleAddTask: async () => {},
  handleUpdateStatus: async () => {},
  handleDeleteTask: async () => {},
})

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const { getTasks, addTask, updateStatus, deleteTask } = useTasks()

  const pendingTasks = useMemo(() => tasks.filter(task => !task.completed), [tasks])
  const completedTasks = useMemo(() => tasks.filter(task => task.completed), [tasks])

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks()
      setTasks(data ?? [])
    }
    fetchTasks()
  }, [getTasks])

  const handleAddTask = async (title: string) => {
    const newTask = await addTask(title)
    if (newTask) {
      setTasks(prev => [...prev, newTask])
    }
  }

  const handleUpdateStatus = async (id: string) => {
    const updatedTask = await updateStatus(id)
    if (updatedTask) {
      setTasks(prev =>
        prev.map(task => (task._id === id ? updatedTask : task))
      )
    }
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id)
    setTasks(prev => prev.filter(task => task._id !== id))
  }

  return (
    <TaskContext.Provider value={{ pendingTasks, completedTasks, handleAddTask, handleUpdateStatus, handleDeleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}
