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
    // debugger
    // console.log('_drawTodo Controller, pulling created ToDo from Sandbox')
    let todos = AppState.sandboxTodos
    let template = ''
    todos.forEach(todo => template += todo.todoTemplate)
    setHTML('todos', template)
    // FIXME ALSO while drawing count up uncompleted todos and draw them too in their own setHTML call
}
// 🆑
export class TodosController {
    constructor() {

        AppState.on('account', this.getTodos)
        AppState.on('sandboxTodos', _drawTodos)
        // NOTE wait for the account to come back before trying  get req to the sandbox
        // AppState.on('edit', this.editTodo)
    }
    //  1️⃣  READ - GET-  PULL TO DO FROM DB
    async getTodos() {
        // debugger
        try {
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
            // console.log('todo data!', formData)
            await todosService.createTodo(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {

            Pop.error(error)
        }
    }
    // 3️⃣ DELETE - DELETE
    async deleteTodo(todoId) {
        // debugger
        try {

            if (await Pop.confirm("Delete To Do?")) {
                await todosService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

    // 4️⃣ EDIT - PUT
    async editTodo(todoId) {
        // FIXME look at spellbook for preparing a spell. there is a lot going on here that in uneccisary for this checkbox.
        // debugger
        try {
            // console.log('editing todo');
            await todosService.editTodo(todoId)

        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}
