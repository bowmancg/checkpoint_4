// import { ValuesController } from "./Controllers/ValuesController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js"
import { TodoController } from "./Controllers/TodoController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { ClockController } from "./Controllers/ClockController.js";

class App {
  // valuesController = new ValuesController();
  quoteController = new QuoteController()
  weatherController = new WeatherController()
  todoController = new TodoController()
  imageController = new ImageController()
  clockController = new ClockController()
}

window["app"] = new App();

let clockElem = document.getElementById("clock")

