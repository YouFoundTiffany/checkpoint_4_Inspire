import { clockService } from "../services/ClockService.js";


export class ClockController {
    constructor() {
        console.log('clock controller is connected')
        this.updateClock()
        setInterval(this.updateClock, 1000)
    }

    updateClock() {
        clockService.getTime()
    }
   
}