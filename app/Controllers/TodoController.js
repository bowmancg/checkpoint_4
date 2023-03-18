import { appState } from "../AppState.js";
import { sandboxTodoService } from "../Services/SandboxTodoService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"

function _drawTodos() {
    let todo = appState.todos
    let template = ''
    todo.forEach(t => template += t.todoCardTemplate)
    setHTML('todo-form', template)
}

export class TodoController {
    constructor() {
        console.log('construct');
        // this.getSandboxTodo()
        appState.on('todos', _drawTodos)
    }

    async getSandboxTodo() {
        try {
            await sandboxTodoService.getSandboxTodo()
        } catch (error) {
            Pop.error(error)
        }
    }

    async addSandboxTodo(event) {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await sandboxTodoService.addSandboxTodo(formData)
            form.reset()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}