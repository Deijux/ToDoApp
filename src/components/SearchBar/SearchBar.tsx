import { useState, ChangeEvent, FormEvent } from 'react'
import { useTaskContext } from '@/context/task.context'
import { IoAdd } from 'react-icons/io5'
import Swal from 'sweetalert2'

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  const { handleAddTask } = useTaskContext()

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

  return (
    <form
      className='flex flex-wrap flex-row gap-2 justify-center'
      onSubmit={handleSubmit}
    >
      <input
        className='w-80 md:w-96 h-11 md:h-14 rounded-lg p-2 px-4 bg-marshland-900 border border-marshland-300 text-white placeholder-white md:text-lg'
        type='text'
        placeholder='Agrega una tarea!'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='rounded-lg bg-marshland-400 flex items-center justify-center size-11 md:size-14'
        type='submit'
        aria-label='Set task'
      >
        <IoAdd color='#fff' size={30} />
      </button>
    </form>
  )
}
