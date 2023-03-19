import { appState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"

function _drawTodos() {
    let todo = appState.todos
    let template = ''
    todo.forEach(t => template += t.todoItem)
    setHTML('todo-list-items', template)
}

function _drawTodoCount() {
    let template = `<div class="row card-title">
    <div class="fs-6 col align-self-start">Todo</div>
    <div class="col align-self-end">${todoService.getTodoCount()} left</div>
  </div>
  `
   setHTML('todo-count', template) 
}

export class TodoController {
    constructor() {
        console.log('construct');
        appState.on('todos', _drawTodoCount)
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

    async deleteTodo(id) {
        try {
            if (await Pop.confirm("Are you sure?")) {
                await todoService.deleteTodo(id)
            }            
        } catch (error) {
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