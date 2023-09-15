import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { getTextData } from "../utils/OninputHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// 🅿️ DRAW TO DO LIST TO PAGE
function _drawTodos() {
    let todos = AppState.sandboxTodos
    let template = ''
    todos.forEach(todo => template += todo.todoTemplate)
    setHTML('todos', template)
  
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
