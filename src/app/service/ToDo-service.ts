/* const localhost = 'http://localhost:3001/todoList'
const apiWeb = 'https://my-json-server.typicode.com/deijux/ToDoApp-api/todoList'

const apiFetch = apiWeb */

const getDataFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todoList') || '[]')
  if (!data.length) localStorage.setItem('todoList', JSON.stringify([]))
  return data
}

const setDataToLocalStorage = (data: object[]) => {
  localStorage.setItem('todoList', JSON.stringify(data))
}

const getToDo = async () => {
  /* const response = await fetch(apiFetch)
  const data = await response.json()
  return data */

  const data = getDataFromLocalStorage()
  return data
}

const addTask = async (title: string) => {
  /* const response = await fetch(apiFetch, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false }),
  })
  const data = await response.json()
  return data */

  const data = getDataFromLocalStorage()
  const id = new Date().getTime().toString()
  const newTask = { id: id, title, completed: false }
  data.push(newTask)
  setDataToLocalStorage(data)
  return newTask
}

const deleteTask = async (id: string) => {
  /* const response = await fetch(apiFetch + '/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data */
  const data = getDataFromLocalStorage()
  const newData = data.filter((task: { id: string }) => task.id !== id)
  setDataToLocalStorage(newData)
}

const changeStatusTask = async (
  id: string,
  title: string,
  completed: boolean,
) => {
  /* const response = await fetch(apiFetch + '/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: !completed }),
  })
  const data = await response.json()
  return data */
  const data = getDataFromLocalStorage()
  const newData = data.map((task: { id: string; completed: boolean }) =>
    task.id === id ? { ...task, completed: !completed } : task,
  )
  setDataToLocalStorage(newData)
}

export const servicesToDo = { getToDo, addTask, deleteTask, changeStatusTask }
