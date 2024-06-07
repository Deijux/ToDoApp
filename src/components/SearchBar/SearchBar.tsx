import { IoAdd } from 'react-icons/io5'
import { servicesToDo } from '@/app/service/ToDo-service'
import { useState, ChangeEvent, FormEvent } from 'react'

interface SearchBarProps {
  onAddTask: (task: Task) => void
}

interface Task {
  id: string
  title: string
  completed: boolean
}

export default function SearchBar({ onAddTask }: SearchBarProps) {
  const { addTask } = servicesToDo
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleAddTask(inputValue)
  }

  const handleAddTask = (title: string) => {
    addTask(title)
      .then(res => {
        onAddTask(res)
        setInputValue('')
      })
      .catch(err => setError(err.message))
  }
  if (error) return <h1 className='text-white'>New Error: {error}</h1>
  return (
    <form
      className='flex flex-wrap flex-row items-center gap-2'
      onSubmit={handleSubmit}
    >
      <input
        className='w-80 rounded-lg p-2 px-4 bg-transparent border border-[#3E1671] text-white'
        type='text'
        placeholder='Agrega una tarea!'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='rounded-lg bg-[#9E78CF] flex items-center justify-center h-10 w-10'
        type='submit'
      >
        <IoAdd color='#fff' size={30} />
      </button>
    </form>
  )
}
