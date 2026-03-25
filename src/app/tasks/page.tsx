'use client'
import SearchBar from '@/components/SearchBar/SearchBar'
import Welcome from '@/components/Welcome/Welcome'
import TaskList from '@/components/TaskList/TaskList'
import Card from '@/components/Card/Card'
import { useTaskContext } from '@/context/task.context'

export default function TasksPage() {
  const {
    pendingTasks,
    completedTasks,
    handleAddTask,
    handleUpdateStatus,
    handleDeleteTask,
  } = useTaskContext()

  return (
    <main className='grid content-start justify-center py-6'>
      <div className='flex flex-col items-center gap-10 max-w-md'>
        <SearchBar handleAddTask={handleAddTask} />

        {pendingTasks.length === 0 && completedTasks.length === 0 && (
          <Welcome />
        )}

        {pendingTasks.length > 0 && (
          <TaskList count={pendingTasks}>
            <h1 className='text-white md:text-lg'>
              Tareas por hacer - {pendingTasks.length}
            </h1>
            {pendingTasks.map(task => (
              <Card
                key={task._id}
                id={task._id}
                title={task.title}
                content={task.title}
                completed={task.completed}
                onChangeStatus={handleUpdateStatus}
                onDelete={handleDeleteTask}
              />
            ))}
          </TaskList>
        )}

        {completedTasks.length > 0 && (
          <TaskList>
            <h1 className='text-white md:text-lg'>
              Tareas realizadas - {completedTasks.length}
            </h1>
            {completedTasks.map(task => (
              <Card
                key={task._id}
                id={task._id}
                title={task.title}
                content={task.title}
                styles='line-through text-[#78CFB0]'
                completed={task.completed}
                onChangeStatus={handleUpdateStatus}
                onDelete={handleDeleteTask}
              />
            ))}
          </TaskList>
        )}
      </div>
    </main>
  )
}
