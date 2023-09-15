import { AppState } from "../AppState.js"

// 🆑
export class Todo {
    constructor(data) {
        this.id = data.id || ""
        // tick box
        this.completed = data.completed
        this.creatorId = data.creatorid
        // text box
        this.description = data.description || ""
    }


    get todoTemplate() {
        return `
        <div class="col-12 w-100" id="">

        <span>
        ${this.completedCheckbox}
        </span>

        <textarea row=20 column=1 name="description" id="">${this.description}
        </textarea>

        <span id="" class="mdi mdi-trash-can-outline" onclick="app.TodosController.deleteTodo('${this.id}')">
        </span>

        </div>
        `
    }

    get completedCheckbox() {
        if (this.completed) {
            return `
            <input checked onchange="app.TodosController.editTodo('${this.id}')" class="form-check-input" type="checkbox" name="completed" value="" id="flexCheckDefault">
            `
        } else {
            return `
            <input onchange="app.TodosController.editTodo('${this.id}')" class="form-check-input" type="checkbox" name="completed" value="" id="flexCheckDefault">
            `
        }
    }

    static TodoCount() {
        let sandboxTodos = AppState.sandboxTodos
        let incompleteTodos = AppState.sandboxTodos.filter(todo => !todo.completed)

        if (incompleteTodos.length <= sandboxTodos.length)
            return '<h5 class="text-incomplete">${incompleteTodos.length} Left</h5>'
    }

}
//            <div class="col-12 w-100" id="">

//     <span>
//         ${this.completedCheckbox}
//     </span>

//     <p name="description" id="">${this.description}
//     </p>

//     <span id="" class="mdi mdi-trash-can-outline" onclick="app.TodosController.deleteTodo('${this.id}')">
//     </span>

// </div>