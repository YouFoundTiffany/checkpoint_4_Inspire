import { AboutController } from "./controllers/AboutController.js";
import { TodosController } from "./controllers/TodosController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { ClockController } from "./controllers/ClockController.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [TodosController, ImagesController, QuotesController, WeatherController, ClockController],
    view: /*html*/`
 </section>
    <section class="container-fluid h-25">
      <div class="row justify-content-between">
        <div class="col-12 col-md-3 pt-2">
          <div class="bx-bg-blur p-1">
            <h6>Image by</h6>
            <h5>Author Name</h5>
          </div>
        </div>
        <!-- need to put a string interp or link in div below for weather -->
        <div class="col-12 col-md-3 text-end">
          <!-- weather template -->
          <div class="row justify-content-end p-2 pe-3">
            <div class=" justify-content-end col-4 bx-bg-blur">
              <p class="text-end">65*</p>
              <p>Sunny</p>
              <p>☀️</p>
            </div>
            <!-- end weather temp -->
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid h-50 justify-content-center align-items-center d-flex">
      <!-- need to put a string interp or link in div below for clock -->
      <div class="row justify-content-center">
        <!-- clock template -->
        <div class="p-2 bx-bg-blur text-center">
          <h1 class="m-0 px-1" id="clock"></h1>
        </div>
        <!-- end clock temp -->
      </div>

    </section>

    <section class="conatainer-fluid h-25 de-flex flex-column justify-content-end p-1">
      <!-- need to put a string interp or link in div below for quote -->
      <div class="m-0 row justify-content-end align-items-baseline pe-2">
        <!-- quote template -->
        <div class="col-12 col-md-4 d-flex justify-content-end align-items-baseline">

          <div class="bx-bg-blur m-0 col-12 px-2 pt-2 d-flex flex-column align-baseline">




          </div>
        </div>
        <!-- spacer -->
        <div class="col-1"></div>
        <!-- end quote temp -->
        <!-- this is top of Todo List stays in the View -->
        <div class="bx-bg-blur col-12 col-md-3 justify-content-end align-items-end">
          <div class="row justify-content-between w-100" id="">
            <div class="col-12 col-md-4 pt-1">TO DO LIST </div>
            <div class="col-12 col-md-1"></div>
            <div class="col-12 col-md-6 pt-1">4 left</div>
            <form onsubmit="app.TodosController.createTodo()">
             <input onfocus="this.value=''" name="description" type="text" value="To Do" />
             <button class="mdi mdi-plus-box" type="submit" value="Submit"></button>
           </form>
          </div>
          <!--xxxxxxxx created todos template keep this top row -->
          <div class="row col-12 w-100" id="todos">
            <!--WE NEVER SEE THIS LINE yyyyyyyy template located in Todo model -->

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




//  </section >
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