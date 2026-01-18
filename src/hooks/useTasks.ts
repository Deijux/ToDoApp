'use client'

import { useCallback } from 'react'
import { tasksService } from '@/services/tasks.service'
import { handleAxiosError } from '@/utils/error.handler'

export function useTasks() {
  const getTasks = useCallback(async () => {
    try {
      const data = await tasksService.getTasks()
      return data
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al obtener las tareas'))
    }
  }, [])

  const addTask = useCallback(async (title: string) => {
    try {
      const newTask = await tasksService.add(title)
      return newTask
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al agregar la tarea'))
    }
  }, [])

  const updateStatus = useCallback(async (id: string) => {
    try {
      const updatedTask = await tasksService.updateStatus(id)
      return updatedTask
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al actualizar la tarea'))
    }
  }, [])

  const deleteTask = useCallback(async (id: string) => {
    try {
      await tasksService.delete(id)
    } catch (error) {
      throw new Error(handleAxiosError(error, 'Error al eliminar la tarea'))
    }
  }, [])

  return {
    getTasks,
    addTask,
    updateStatus,
    deleteTask,
  }
}
