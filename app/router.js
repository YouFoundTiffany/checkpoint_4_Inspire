import { AboutController } from "./controllers/AboutController.js";
import { TodosController } from "./controllers/TodosController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: TodosController,
    view: /*html*/`
    </section>
    <div class="conatainer-fluid">
      <section class="row justify-content-end p-2">
        <div class="col-4">
          <div id="createTodoTemplate()">
            <h4>TODO LIST</h4>
            <form onsubmit="app.TodosController.createTodo()">
              <input onfocus="this.value=''" name="description" type="text" value="To Do" />
              <button class="mdi mdi-plus-box" type="submit" value="Submit"></button>
            </form>
          </div>

          <div id="todos">


          </div>
        </div>


      </section>
    </div>
    `
  },
  // {
  //   path: '#/about',
  //   controller: [AboutController, ValuesController],
  //   view: AboutView
  // }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */