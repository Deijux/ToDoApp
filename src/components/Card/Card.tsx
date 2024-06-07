import { IoCheckmark } from 'react-icons/io5'
import { PiTrashSimple } from 'react-icons/pi'
import { GoArrowUp } from 'react-icons/go'
import { servicesToDo } from '@/app/service/ToDo-service'
import { useState } from 'react'

interface CardProps {
  styles?: string
  content: string
  id: string
  title: string
  completed: boolean
  onDeleteTask: (id: string) => void
  onChangeStatusTask: (id: string) => void
}

export default function Card({
  styles,
  content,
  id,
  title,
  completed,
  onDeleteTask,
  onChangeStatusTask,
}: CardProps) {
  const [error, setError] = useState(null)
  const { deleteTask, changeStatusTask } = servicesToDo

  const handleDelete = (id: string) => {
    deleteTask(id).catch(err => setError(err.message))
    onDeleteTask(id)
  }

  const handleChangeStatus = (
    id: string,
    title: string,
    completed: boolean,
  ) => {
    changeStatusTask(id, title, completed).catch(err => setError(err.message))
    onChangeStatusTask(id)
  }

  if (error) return <p>New Error: {error}</p>

  return (
    <div
      id={id}
      className='text-[#9E78CF] py-6 px-4 bg-[#15101C] rounded-lg flex flex-row justify-between'
    >
      <h2 className={`${styles}`}>{content}</h2>
      <ul className='flex flex-row gap-2'>
        <li className='flex'>
          <button onClick={() => handleChangeStatus(id, title, completed)}>
            {completed ? (
              <GoArrowUp size={20} color='#9E78CF' />
            ) : (
              <IoCheckmark size={20} color='#9E78CF' />
            )}
          </button>
        </li>
        <li className='flex'>
          <button onClick={() => handleDelete(id)}>
            <PiTrashSimple size={20} color='#9E78CF' />
          </button>
        </li>
      </ul>
    </div>
  )
}
