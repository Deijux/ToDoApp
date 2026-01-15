'use client'

import { useCallback } from 'react'
import { tasksService } from '@/services/tasks.service'
import axios from 'axios'

export function useTasks() {

  const getTasks = useCallback(async () => {
    try {
      const data = await tasksService.getTasks()
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || 'Error al cargar las tareas'
        throw new Error(message)
      }
      throw new Error('Error inesperado al cargar las tareas')
    }
  }, [])

  const addTask = useCallback(async (title: string) => {
    try {
      const newTask = await tasksService.add(title)
      console.log(newTask)
      return newTask
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || 'Error al agregar la tarea'
        throw new Error(message)
      } else {
        throw new Error('Error inesperado al agregar la tarea')
      }
    }
  }, [])

  const updateStatus = useCallback(async (id: string) => {
    try {
      const updatedTask = await tasksService.updateStatus(id)
      return updatedTask
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || 'Error al actualizar el estado de la tarea'
        throw new Error(message)
      } else {
        throw new Error('Error inesperado al actualizar el estado de la tarea')
      }
    }
  }, [])

  const deleteTask = useCallback(async (id: string) => {
    try {
      await tasksService.delete(id)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || 'Error al eliminar la tarea'
        throw new Error(message)
      } else {
        throw new Error('Error inesperado al eliminar la tarea')
      }
    }
  }, [])

  return {
    getTasks,
    addTask,
    updateStatus,
    deleteTask,
  }
}
