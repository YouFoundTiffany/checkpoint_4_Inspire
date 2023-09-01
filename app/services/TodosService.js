import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";


class TodosService {

    async deleteTodo(todoId) {
        const res = await api.delete(`api/todos/${todoId}`)
        console.log(res.data, '[DELETING]')

        AppState.sandboxTodos = AppState.sandboxTodos.filter(todos => todos.id != todoId)
        // AppState.emit('sandboxApods')
    }
    async createTodo(FormData) {
        // NOTE here we are sending the activeApod from the AppState bc that is where the img is saved from the Nasa API in our application
        const response = await api.post('api/todos', FormData)
        console.log(response.data, 'creating To Do')
        const newTodo = new Todo(response.data)
        AppState.sandboxTodos.push(newTodo)
        // this.getTodos()
    }
    async getTodos() {

        const response = await api.get('api/todos')
        console.log(response.data, 'getting the sandbox todos')
        let mappedArray = response.data.map(dataObj => new Todo(dataObj))
        AppState.sandboxTodos = mappedArray
        console.log(AppState.sandboxTodos)
    }
}







export const todosService = new TodosService()


