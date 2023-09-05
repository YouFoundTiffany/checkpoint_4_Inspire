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


    // Codeworks FormHandler only works for form tags. My Todos are displayed in a text area. Adding an On Input attribute. oninput - triggers my function for the textarea. https://www.w3schools.com/jsref/event_oninput.asp
    get todoTemplate() {
        return `
       <div class="col-12 w-100" id="">

      <span>
          <input onchange="app.TodosController.editTodo('${this.id}')"z" class="form-check-input" type="checkbox" name="completed" value="" id="flexCheckDefault">
      </span>

      <p name="description" id="">${this.description}
      </p>

      <span id="" class="mdi mdi-trash-can-outline" onclick="app.TodosController.deleteTodo('${this.id}')">
      </span>

    </div>
        `
    }


}