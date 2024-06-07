'use client'
import SearchBar from '@/components/SearchBar/SearchBar'
import TaskList from '@/components/TaskList/TaskList'
import { servicesToDo } from './service/ToDo-service'
import Card from '@/components/Card/Card'

import { useEffect, useState } from 'react'

type Task = {
  id: string
  title: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    servicesToDo
      .getToDo()
      .then(res => setTasks(res))
      .catch(err => console.log(err))
  }, [])

  const countToDo = tasks.filter(task => !task.completed).length
  const countDone = tasks.filter(task => task.completed).length

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

  return (
    <main className='flex flex-col gap-10'>
      <SearchBar onAddTask={handleNewTask} />

      <TaskList count={countToDo}>
        {countToDo > 0 && <h1>Tareas por hacer - {countToDo}</h1>}
        {tasks.map(task => {
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

      <TaskList>
        {countDone > 0 && <h1>Tareas realizadas - {countDone}</h1>}
        {tasks.map(task => {
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
    </main>
  )
}
