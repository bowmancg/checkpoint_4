import { appState } from "../AppState.js";
import { todoApi } from "./AxiosService.js";
import { Todo } from "../Models/Todo.js";


class TodoService {

    async addTodo(formData) {
        const res = await todoApi.post('', formData)
        console.log('[NEW TODO]', res.data);
        const newTodo = new Todo(res.data)
        appState.todos.push(newTodo)
        appState.emit('todos')
    }

    getTodoCount() {
        let todos = appState.todos.filter(t => !t.completed)
        return todos.length
    }

    async getTodos() {
        const res = await todoApi.get('')
        console.log('[GET DATA]', res.data);
        appState.todos = res.data.map(t => new Todo(t))
    }

    async deleteTodo(id) {
        const res = await todoApi.delete(`${id}`)
        appState.todos = appState.todos.filter(todo => todo.id != id)
        console.log(appState.todos);
    }

    async setCompleted(id, completed) {
        //NOTE - find todo by id in appstate
        //NOTE - update found todo set completed property to completed argument value
        //NOTE - todo api pass found todo in put method
        const foundTodo = appState.todos.find(t => t.id == id)
        console.log('found a todo', foundTodo);
        foundTodo.completed = completed
        const res = await todoApi.put(id, foundTodo)
        // TODO update state with new todo
        appState.emit('todos')
    }
}

export const todoService = new TodoService()