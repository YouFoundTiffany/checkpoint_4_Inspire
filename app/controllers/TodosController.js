import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// // DRAW TO DO LIST TO PAGE
function _drawTodos() {
    console.log('drawing, pulling created ToDo from Sandbox')
    let todos = AppState.sandboxTodos
    let template = ''
    todos.forEach(todo => template += todo.todoTemplate)
    setHTML('todos', template)
}

export class TodosController {
    constructor() {
        console.log('Sandbox Todos Controller is connected')
        // this.getTodos()

        AppState.on('sandboxTodos', _drawTodos)
        // // NOTE wait for the account to come back before trying  get req to the sandbox
        AppState.on('account', this.getTodos)
    }

    // NOTE POST = 
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
    async getTodos() {
        try {
            console.log('adding todo')
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }


    async deleteTodo(todoId) {
        try {
            if (await Pop.confirm("Nuke?")) {
                await todosService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

}



// ✅NOTE CREATE - POST
//  READ - GET;
// TODO UPDATE - PUT
// TODO DELETE - DELETE