import taskImage from '../../assets/task-list.svg'
import Image from 'next/image'

function Welcome() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-3/4 w-auto md:w-max'>
      <Image
        src={taskImage}
        alt='Task Manager'
        className='size-72 md:size-96'
      />
      <div className='text-white text-center'>
        <h1 className='text-3xl font-bold md:text-4xl'>
          Bienvenido a tu lista de tareas!
        </h1>
        <p className='text-lg md:text-xl'>Agrega tu primera tarea!</p>
      </div>
    </div>
  )
}

export default Welcome
