'use client'
import SearchBar from './components/SearchBar/SearchBar'
import TaskDone from './components/TaskDone/TaskDone'
import TaskToDo from './components/TaskToDo/TaskToDo'
import { servicesToDo } from './service/ToDo-service'
import Card from './components/Card/Card'

import { useEffect, useState } from 'react'

type Task = {
  id: string | number
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

  return (
    <main className='flex flex-col gap-10'>
      <SearchBar onAddTask={handleNewTask} />

      <TaskToDo count={countToDo}>
        {tasks.map(task => {
          if (!task.completed) {
            return <Card key={task.id} content={task.title} />
          }
        })}
      </TaskToDo>

      <TaskDone count={countDone}>
        {tasks.map(task => {
          if (task.completed) {
            return (
              <Card
                key={task.id}
                content={task.title}
                styles='line-through text-[#78CFB0]'
              />
            )
          }
        })}
      </TaskDone>
    </main>
  )
}
