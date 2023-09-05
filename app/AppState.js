
import { Todo } from './models/Todo.js'
import { Image } from './models/Image.js'
import { Quote } from './models/Quote.js'
import { Weather } from './models/Weather.js'
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'


class ObservableAppState extends EventEmitter {
  page = ''
  account


  // THE TODO's
  /** @type {Todo[]} */
  sandboxTodos = []
  updatedDescription = null


  // IMAGES
  /** @type {Image[]} */
  image = []
  /** @type {Image[] | null} */
  activeImage = null


  // QUOTES
  /** @type {Quote[]} */
  quotes = []
  /** @type {Quote | null} */
  activeQuote = null


  // WEATHER
  /** @type {Weather[]} */
  weather = []
  /** @type {Weather | null} */
  activeWeather = null


  // USER
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
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