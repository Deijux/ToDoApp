export default function TaskList(props: any) {
  return (
    <section className='text-white flex flex-col gap-3 w-full'>
      {props.children}
    </section>
  )
}
