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
    view: /*html*/`<section class="container-fluid">
      <div class="row justify-content-between p-1">
        <div class="col-12 col-md-3">
          <h6>Image by</h6>
          <h5>Author Name</h5>
        </div>
        <div class="col-12 col-md-3 text-end">
          <div class="bg-blur">
            <div>
              <p>65*</p>
              <p>Sunny</p>
              <p>☀️</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    <section class="container-fluid h-50">
      <div>
        <div>
          <h1>Clock</h1>
        </div>
      </div>

    </section>

    <section class="conatainer">
      <div class="row justify-content-end p-2">
        <div class="text-white col-12 col-md-4">
          quote
        </div>
        <div class="col-12 col-md-3">
          <div class="row text-white justify-content-between" id="">
            <div class="col-12 col-md-4 px-1">TO DO LIST </div>
            <div class="col-12 col-md-4 px-1"> 4 left</div>
            <form onsubmit="app.TodosController.createTodo()">
              <input name="todo" type="text" value="To Do" />
              <button class="mdi mdi-plus-box" type="submit" value="Submit"></button>
          </div>

          <div class="row" id="todos">


          </div>
        </div>


      </div>
    </section>
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





// WHAT GOES ABOVE IN THE ROUTER PRIOR TO BLOCKING IN ENTIRE page
// </section >
//   <div class="conatainer-fluid">
//     <section class="row justify-content-end p-2">
//       <div class="col-4">
//         <div id="createTodoTemplate()">
//           <h4>TODO LIST</h4>
//           <form onsubmit="app.TodosController.createTodo()">
//             <input onfocus="this.value=''" name="description" type="text" value="To Do" />
//             <button class="mdi mdi-plus-box" type="submit" value="Submit"></button>
//           </form>
//         </div>

//         <div id="todos">


//         </div>
//       </div>


//     </section>
//   </div>