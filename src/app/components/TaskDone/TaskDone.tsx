export default function TaskDone(props: any) {
  return (
    <section className='text-white flex flex-col gap-3'>
      <h1>Tareas realizadas - {props.count}</h1>
      {props.children}
    </section>
  )
}
