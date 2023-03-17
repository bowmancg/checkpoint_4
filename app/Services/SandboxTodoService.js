import { appState } from "../AppState.js";
import { todoApi } from "./AxiosService.js";
import { SandboxTodo } from "../Models/SandboxTodo.js";


class SandboxTodoService {

    async addSandboxTodo(formData) {
        const res = await todoApi.post('todos', formData)
        console.log('[NEW TODO]', res.data);
    }

    async getSandboxTodo() {
        const res = await todoApi.get('')
        console.log('[GET DATA]', res.data);
        appState.todos = res.data.map(t => new SandboxTodo(t))
    }

    
}

export const sandboxTodoService = new SandboxTodoService()