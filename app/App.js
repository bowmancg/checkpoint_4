// import { ValuesController } from "./Controllers/ValuesController.js";
import { TodoController } from "./Controllers/TodoController.js";

class App {
  // valuesController = new ValuesController();
  todoController = new TodoController()
}

window["app"] = new App();
