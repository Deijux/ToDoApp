const getToDo = async () => {
    try {
        const response = await fetch('http://localhost:3001/todoList');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const addTask = async (title: string) => {
    try {
        const response = await fetch('http://localhost:3001/todoList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, "completed": false})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const deleteTask = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3001/todoList/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const changeStatusTask = async (id: string, title: string, completed: boolean) => {
    try {
        const response = await fetch(`http://localhost:3001/todoList/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, "completed": !completed})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const servicesToDo = {getToDo, addTask, deleteTask, changeStatusTask};