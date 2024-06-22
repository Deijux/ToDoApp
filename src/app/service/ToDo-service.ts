const localhost = 'http://localhost:3001/todoList'
const apiWeb = 'https://my-json-server.typicode.com/deijux/ToDoApp-api/todoList'

const apiFetch = apiWeb

const getToDo = async () => {
    const response = await fetch(apiFetch);
    const data = await response.json();
    return data;
}

const addTask = async (title: string) => {
    const response = await fetch(apiFetch, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, "completed": false})
    });
    const data = await response.json();
    return data;

}

const deleteTask = async (id: string) => {
    const response = await fetch(apiFetch + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

const changeStatusTask = async (id: string, title: string, completed: boolean) => {
    const response = await fetch(apiFetch + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, "completed": !completed})
    });
    const data = await response.json();
    return data;
}

export const servicesToDo = {getToDo, addTask, deleteTask, changeStatusTask};