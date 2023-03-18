import { appState } from "../AppState.js";

export class SandboxTodo{
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }

    get todoCardTemplate() {
        return `
        <form class="col-4 card mt-2" action="" onsubmit="app.sandboxTodoController.addSandboxTodo('${this.id}')">
        <input type="text" placeholder="Create a Todo...">
        <button type="submit" class="btn btn-outline-primary">Create
          Todo<i class="mdi mdi-plus"></i></button>
      </form>
        `
    }

    get todoCheckbox() {
        return `
        <div class="col-4 card">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="" id="flexCheckDefault">
            <label for="flexCheckDefault" class="form-check-label">
              <h5>${this.description}</h5>
            </label>
          </div>
        </div>
        `
    }
}