import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /**@type {import('./Models/Todo').Todo[]} */
  todos = []
  user = {
    name: "chandler"
  }

    /**@type {import('./Models/Weather').Weather} */
  weather = {}

  /**@type {import('./Models/Quote').Quote} */
  quote = {}

  isHidden = true

    /**@type {import('./Models/Image').Image} */
  image = {}

  time = ''

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
