import { IoAdd } from 'react-icons/io5'
import { servicesToDo } from '@/app/service/ToDo-service'
import { useState, ChangeEvent, FormEvent } from 'react'
import Swal from 'sweetalert2'

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
    if (inputValue.trim() === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Ingresa un dato valido!',
        icon: 'error',
        position: 'bottom-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1c4543',
        color: '#fff',
      })
    } else {
      handleAddTask(inputValue)
    }
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
      className='flex flex-wrap flex-row gap-2 justify-center'
      onSubmit={handleSubmit}
    >
      <input
        className='w-80 h-11 rounded-lg p-2 px-4 bg-marshland-900 border border-marshland-300 text-white placeholder-white'
        type='text'
        placeholder='Agrega una tarea!'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='rounded-lg bg-marshland-400 flex items-center justify-center size-11'
        type='submit'
      >
        <IoAdd color='#fff' size={30} />
      </button>
    </form>
  )
}
