'use client'
import SearchBar from '@/components/SearchBar/SearchBar'
import Welcome from '@/components/Welcome/Welcome'
import TaskList from '@/components/TaskList/TaskList'
import { servicesToDo } from './service/ToDo-service'
import Card from '@/components/Card/Card'
import Swal from 'sweetalert2'

import { useEffect, useState } from 'react'

type Task = {
  id: string
  title: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState(null)

  useEffect(() => {
    servicesToDo
      .getToDo()
      .then(res => setTasks(res))
      .catch(err => setError(err.message))
  }, [])

  const countToDo = tasks?.filter(task => !task.completed).length
  const countDone = tasks?.filter(task => task.completed).length

  const handleNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleChangeStatusTask = (id: string) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      }),
    )
  }

  if (error) {
    Swal.fire({
      title: 'Error!',
      text: 'Error al cargar las tareas!',
      icon: 'error',
      position: 'bottom-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
  }

  return (
    <main className='flex flex-col items-center gap-10 max-w-md'>
      <SearchBar onAddTask={handleNewTask} />

      {countToDo === 0 && countDone === 0 && <Welcome />}

      {countToDo > 0 && (
        <TaskList count={countToDo}>
          <h1 className='text-white md:text-lg'>
            Tareas por hacer - {countToDo}
          </h1>
          {tasks?.map(task => {
            if (!task.completed) {
              return (
                <Card
                  id={task.id}
                  title={task.title}
                  key={task.id}
                  content={task.title}
                  onDeleteTask={handleDeleteTask}
                  onChangeStatusTask={handleChangeStatusTask}
                  completed={task.completed}
                />
              )
            }
          })}
        </TaskList>
      )}

      {countDone > 0 && (
        <TaskList>
          <h1 className='text-white md:text-lg'>
            Tareas realizadas - {countDone}
          </h1>
          {tasks?.map(task => {
            if (task.completed) {
              return (
                <Card
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  content={task.title}
                  styles='line-through text-[#78CFB0]'
                  onDeleteTask={handleDeleteTask}
                  onChangeStatusTask={handleChangeStatusTask}
                  completed={task.completed}
                />
              )
            }
          })}
        </TaskList>
      )}
    </main>
  )
}
