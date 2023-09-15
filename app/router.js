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
    <!-- 🟢🟢🟢 TOP 25 VH SECTION 🟢🟢🟢 -->
    <section class="container-fluid h-25">
      <!-- 🟢🟢🟢 IMAGE AND WEATHER ROW 🟢🟢🟢 -->
      <div class="row justify-content-between">
        <!-- 🟢🟢🟢 IMAGE CONTAINER 🟢🟢🟢 -->
        <div class="col-12 col-md-3 pt-2">
          <!-- 🟢🟢🟢 IMAGE DIV 🟢🟢🟢 -->
          <div id="img-name" class="bx-bg-blur p-1">


          </div>
          <!-- 🛑🛑🛑 END IMAGE DIV 🛑🛑🛑 -->
        </div>


        <!-- 🛑🛑🛑 END IMAGE CONTAINER 🛑🛑🛑 -->
        <div class="col-12 col-md-3 text-end">
          <!-- 🟢🟢🟢 WEATHER CONTAINER 🟢🟢🟢 -->
          <div id="" class="p-2 pe-3">
            <!-- 🟢🟢🟢 WEATHER DIV 🟢🟢🟢 -->
            <div class="bx-bg-blur p-1">
              <p class="text-end">weather</p>
              <p>Sunny</p>
              <p>icon</p>
            </div>
            <!-- 🛑🛑🛑 END WEATHER CONTAINER 🛑🛑🛑 -->
          </div>
        </div>
      </div>
    </section>
    <!-- 🛑🛑🛑 END IMAGE AND WEATHER SECTION 🛑🛑🛑 -->
    <!-- 🛑🛑🛑 TOP 25 VH SECTION 🛑🛑🛑 -->
    <!-- 🟢🟢🟢 MIDDLE 50 VH SECTION 🟢🟢🟢 -->
    <!-- 🟢🟢🟢 CLOCK CONTAINER 🟢🟢🟢-->
    <section class="container-fluid h-50">
          <!-- ⬇️ CLOCK ROW -->
      <div class="row justify-content-center">
        <!-- ⬇️ CLOCK DIV -->
        <div class=" col-4 p-2 bx-bg-blur text-center">
          <!-- ⬇️ CLOCK ELEMENT -->
          <h1 class="m-0 px-1" id="clock"></h1>
        </div>
        <!-- 🛑🛑🛑 END CLOCK SECTION 🛑🛑🛑 -->
      </div>
    </section>
    <!-- 🛑🛑🛑 END MIDDLE 50 VH SECTION 🛑🛑🛑 -->
    <!-- 🟢🟢🟢 BOTTOM 25 VH SECTION 🟢🟢🟢 -->
    <section class="conatainer h-25 p-1">
      <!-- 🟢🟢🟢 QUOTE AND TODO ROW 🟢🟢🟢 -->
      <div class="row m-0 justify-content-between pe-2">
        <div class="col-12 col-md-4">
          <div class="bx-bg-blur m-0 col-12 px-2 pt-2">
            <!-- 🟢🟢🟢 QUOTE DIV 🟢🟢🟢 -->
             <div class="pb-1" id="thequote">


            </div>
          </div>
        </div>
        <!-- SPACER COLUMN -->


        <!-- 🛑🛑🛑 END QUOTE TEMPLATE 🛑🛑🛑 -->
        <!-- 🟢🟢🟢 TODO LIST TITLE CONTAINER 🟢🟢🟢 -->
        <div class="bx-bg-blur col-12 col-md-3 ">
        <section>
          <div class="pt-1 justify-content-between w-100">
            <div class="col-12 col-md-4 pt-1">TO DO LIST</div>
            <div class="col-12 col-md-1"></div>
            <div class="col-12 col-md-6 pt-1">NUM 5/div>
              <!-- 🟢🟢🟢 TODO FORM 🟢🟢🟢 -->
              <form onsubmit="app.TodosController.createTodo()">
                <input onfocus="this.value=''" name="description" type="text" value="To Do" />
                <button class="mdi mdi-plus-box" type="submit" value="Submit"></button>
              </form>
            <!-- 🛑🛑🛑 TODO FORM 🛑🛑🛑 -->
            </div>
            <!-- 🟢🟢🟢 TODO LIST TEMPLATE CONTAINER 🟢🟢🟢 -->
            <div class=" col-12 w-100" id="todos">


            </div>
            <!-- 🛑🛑🛑 END BOTTOM 25 VH SECTION 🛑🛑🛑 -->

             </section>
         </section>
    `
  },

]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
*/