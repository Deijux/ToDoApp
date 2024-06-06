import { IoCheckmark } from 'react-icons/io5'
import { PiTrashSimple } from 'react-icons/pi'

interface CardProps {
  styles?: string
  content: string
}

export default function Card({ styles, content }: CardProps) {
  return (
    <div className='text-[#9E78CF] py-6 px-4 bg-[#15101C] rounded-lg flex flex-row justify-between'>
      <h2 className={`${styles}`}>{content}</h2>
      <ul className='flex flex-row gap-2'>
        <li>
          <IoCheckmark size={20} color='#9E78CF' />
        </li>
        <li>
          <PiTrashSimple size={20} color='#9E78CF' />
        </li>
      </ul>
    </div>
  )
}
