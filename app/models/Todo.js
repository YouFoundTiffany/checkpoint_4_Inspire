export class Todo {
    constructor(data) {
        // tick box
        this.completed = data.completed
        // text box
        this.description = data.description
        // 
        this.creatorId = data.creatorId
        this.id = undefined

    }

    get todoTemplate() {
        // debugger
        return `
        <div class="col-10">
        <span><input class="form-check-input" type="checkbox" name="completed" value=""
        id="flexCheckDefault"></span>
        <textarea name="description" id="" cols="20" rows="1">${this.description}</textarea>
        <span class="mdi mdi-trash-can-outline" onclick="app.TodosController.deleteTodo()"></span>
        </div>
        `
    }
}





// {
//     "completed": {
//       "type": "Boolean",
//       "required": true,
//       "default": false
//     },
//     "description": {
//       "type": "String",
//       "required": true
//     },
//     "creatorId": {
//       "type": "ObjectId",
//       "required": true,
//       "ref": "Account"
//     }
//   }