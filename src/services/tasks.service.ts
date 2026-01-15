import { api } from '@/lib/api'
import { Task } from '@/types/task'

export const tasksService = {
  async getTasks(): Promise<Task[]> {
    const response = await api.get('/tasks/')
    return response.data
  },

  async add(title: string): Promise<Task> {
    const response = await api.post('/tasks', { title })
    return response.data
  },

  async updateStatus(id: string): Promise<Task> {
    const response = await api.patch(`/tasks/status/${id}`)
    return response.data
  },
  
  async delete(id: string): Promise<void> {
    await api.delete(`/tasks/${id}`)
  }
}
