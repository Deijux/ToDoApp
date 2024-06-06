export default function TaskToDo(props: any) {
  return (
    <section className='text-white flex flex-col gap-3'>
      <h1>Tareas por hacer - {props.count}</h1>
      {props.children}
    </section>
  )
}
