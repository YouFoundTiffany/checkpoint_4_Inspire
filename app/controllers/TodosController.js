// ✅ GET / api / todos	gets all the todos created by the user sending the request
// GET / api / todos /:id	gets a single todo by its id
// ✅ POST / api / todos	creates a new todo from the request body
// PUT / api / todos /:id	targest a single todo by its id and updates it according to the request body
// ✅ DELETE / api / todos /:id	removes a single todo by its id

import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { getTextData } from "../utils/OninputHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// 🅿️ DRAW TO DO LIST TO PAGE
function _drawTodos() {
    console.log('_drawTodo Controller, pulling created ToDo from Sandbox')
    let todos = AppState.sandboxTodos
    let template = ''
    todos.forEach(todo => template += todo.todoTemplate)
    setHTML('todos', template)
}
// 🆑
export class TodosController {
    constructor() {
        // debugger
        console.log('Sandbox Todos Controller is connected')
        // this.getTodos()
        AppState.on('sandboxTodos', _drawTodos)
        // NOTE wait for the account to come back before trying  get req to the sandbox
        AppState.on('account', this.getTodos)
    }
    //  1️⃣  READ - GET-  PULL TO DO FROM DB
    async getTodos() {
        // debugger
        try {
            console.log('Controller getTodo(): getting todo from DB')
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }
    //  2️⃣  CREATE - POST
    async createTodo() {
        // debugger
        try {
            // @ts-ignore
            event.preventDefault()
            // @ts-ignore
            const form = event.target
            const formData = getFormData(form)
            console.log('todo data!', formData)
            await todosService.createTodo(formData)
            // @ts-ignore
            form.reset()
            // TODO check in appstate if form should be null
        } catch (error) {

            Pop.error(error)
        }
    }
    // 3️⃣ DELETE - DELETE
    async deleteTodo(todoId) {
        // debugger
        try {
            console.log('clicked delete', todoId)
            if (await Pop.confirm("Delete To Do?")) {
                await todosService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

    // 4️⃣ EDIT - PUT
    async editTodo(todoId) {
        // debugger
        try {
            window.event?.preventDefault()
            // @ts-ignore
            const text = window.event.target
            // @ts-ignore
            window.event.getTextArea(text)
            // @ts-ignore
            console.log('edit todo data!', textData)
            console.log('clicked edit ', todoId)
            await todosService.editTodo(todoId)

            if (await Pop.confirm("Edit To Do?")) {
            }
        } catch (error) {
            Pop.error(error)
        }
    }
}
