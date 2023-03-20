
export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get todoCardTemplate() {
    return `
        <form class="col-2 card mt-2" action="" onsubmit="app.sandboxTodoController.addTodo('${this.id}')">
        <input type="text" placeholder="Create a Todo...">
        <button type="submit" class="btn btn-outline-primary">Create
          Todo<i class="mdi mdi-plus"></i></button>
      </form>
        `
  }

  get todoItem() {
    return `
      <li class="list-group-item">
        <span class="mb-2">
          <input type="checkbox" class="form-check-input" onclick="app.todoController.onClick()" value="${this.id}" ${this.completed ? 'checked' : ''}>
        </span>
        <span class="mb-2">
          ${this.description}
        </span>
        <span class="offset-8 mb-2">
          <button onclick="app.todoController.deleteTodo('${this.id}')" type="button"
            class="btn btn-outline-danger"><i class="mdi mdi-delete"></i></button>
        </span>
      </li>
      `
  }

  get todoCheckbox() {
    return `
        <div class="mt-3 col-2 text-light bg-dark card">
            <div class="row form-check">
            <div class="col-1">
              <input type="checkbox" class="form-check-input" onclick="app.todoController.onClick()" value="${this.id}" ${this.completed ? 'checked' : ''}>
            </div>
            <div class="col-9">  
              <label for="flexCheckDefault" class="form-check-label">
                <h5>${this.description}</h5>
              </label>
            </div>
            </div>
        </div>
        `
  }
}