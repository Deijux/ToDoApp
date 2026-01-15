import { IoCheckmark } from 'react-icons/io5'
import { PiTrashSimple } from 'react-icons/pi'
import { GoArrowUp } from 'react-icons/go'

interface CardProps {
  styles?: string
  content: string
  id: string
  title: string
  completed: boolean
  onDelete: (id: string) => void
  onChangeStatus: (id: string) => void
}

export default function Card({
  styles,
  content,
  id,
  completed,
  onDelete,
  onChangeStatus,
}: CardProps) {

  return (
    <div
      id={id}
      className='text-white py-6 px-4 bg-marshland-800 rounded-lg flex flex-row justify-between gap-3'
    >
      <h2 className={`${styles} overflow-hidden text-ellipsis md:text-lg `}>
        {content}
      </h2>
      <ul className='flex flex-row gap-2'>
        <li className='flex'>
          <button onClick={() => onChangeStatus(id)}>
            {completed ? (
              <GoArrowUp size={20} color='white' />
            ) : (
              <IoCheckmark size={20} color='white' />
            )}
          </button>
        </li>
        <li className='flex'>
          <button onClick={() => onDelete(id)}>
            <PiTrashSimple size={20} color='white' />
          </button>
        </li>
      </ul>
    </div>
  )
}
