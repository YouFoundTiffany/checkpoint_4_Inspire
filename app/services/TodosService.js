import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";




class TodosService {
    //   1️⃣  GET TO DO
    async getTodos() {
        const response = await api.get('api/todos')
        // console.log(response.data, 'Service: getting the sandbox todos')
        let mappedArray = response.data.map(dataObj => new Todo(dataObj))
        AppState.sandboxTodos = mappedArray
        // console.log(AppState.sandboxTodos)
    }
    //  2️⃣  CREATE TO DO
    async createTodo(formData) {
        // debugger
        const response = await api.post('api/todos', formData)
        console.log(response.data, 'creating To Do')
        const newTodo = new Todo(response.data)
        AppState.sandboxTodos.push(newTodo)
        this.getTodos()
    }
    //  3️⃣ DELETE TO DO
    async deleteTodo(todoId) {
        // debugger
        const response = await api.delete(`api/todos/${todoId}`)
        console.log(response.data, 'Deleting the Todo! Yikes')
        // NOTE we are filtering the array for all that DO NOT match the current Id, does not equal !==
        const filteredArray = AppState.sandboxTodos.filter(t => t.id !== todoId)
        AppState.sandboxTodos = filteredArray
    }
    // 4️⃣ EDIT - PUT - any time we "talk" to our api it will probably need to be a try catch
    async editTodo(todoId) {
        // FIXME before our api call we have to change the data of the todo we clicked on.
        // find the todo in the appstate, change it's data, send to api
        const response = await api.put(`api/todos/${todoId}`)

        // rest of this looks fine
        const updatedTodo = new Todo(response.data)
        let originalTodoIndex = AppState.sandboxTodos.findIndex(todo => todo.id == todoId)
        AppState.sandboxTodos.splice(originalTodoIndex, 1, updatedTodo)
        AppState.emit('todos')
    }
}


export const todosService = new TodosService()



// 1 Call the service method to make the PUT request
// 2 Get the updated todo data in response
// 3 Find the index of the existing todo in AppState
// 4 Replace the old todo with the updated one
// 5 Let me know if this helps explain how to update todos!



// async editTodo(updatedTodo) {
//     // Sending a PUT request to our DB server
//     // The const statement declares an immutable variable.
//     const response = await api.put(`api/todos/${todoId}`, todoData)
//     // console log comments and data. :D again! hahahaha
//     console.log(response.data, 'Editing our Todo! Yay!')
//     // Update the To Do in the AppSTate
//     const updatedTodo = new Todo(response.data)
//     // creating a new todo, its how our server and http work.
//     // updateTodo is a new Todo(show the server response.data)

//     //Find this one todo in the array using an index method.https://www.w3schools.com/jsref/jsref_indexof_array.asp
//     const todoIndex = AppState.sandboxTodos.findIndex(todo => todo.id == todoId)
//     // splice() method adds and/or removes array elements. https://www.w3schools.com/jsref/jsref_splice.asp
//     // splice() method overwrites the original array.
//     // array.splice(index, howmany, item1(this one is optional), ....., itemX)
//     AppState.sandboxTodos.splice(todoIndex, 1, updatedTodo)
// }