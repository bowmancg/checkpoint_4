import { appState } from "../AppState.js";
import { sandboxTodoService as todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"

function _drawTodos() {
    let todo = appState.todos
    let template = ''
    todo.forEach(t => template += t.todoCheckbox)
    setHTML('todo-list', template)
}

export class TodoController {
    constructor() {
        console.log('construct');
        appState.on('todos', _drawTodos)
        this.getTodos()
    }

    async getTodos() {
        try {
            await todoService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }

    async addTodo() {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await todoService.addTodo(formData)
            form.reset()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async onClick() {
        try {
            const check = event.target
            const id = check.value
            const completed = check.checked
            await todoService.setCompleted(id, completed)
            console.log('checked value', check.value, check.checked);
        } catch (error) {
            Pop.error(error)
        }
    }
}