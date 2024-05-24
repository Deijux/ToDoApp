import { IoAdd } from 'react-icons/io5'

export default function SearchBar() {
  return (
    <div className='flex flex-wrap flex-row items-center gap-2'>
      <input
        className='w-96 rounded-lg p-2 px-4 bg-transparent border border-[#3E1671] text-white'
        type='text'
        placeholder='Agrega una tarea!'
      />
      <button className='rounded-lg bg-[#9E78CF] flex items-center justify-center h-10 w-10'>
        <IoAdd color='#fff' size={30} />
      </button>
    </div>
  )
}
