import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
function _drawDailyWeather() {
    // console.log('drawing daily weather')
    let activeWeather = AppState.activeWeather
    let template = ''
    if (activeWeather) {
        // TODO REACTIVATE WHEN DONE WITH HTML
        //     setHTML('active-weather', template)
    }
}


export class WeatherController {
    constructor() {
        // AppState.on('account', this.getWeather)
        AppState.on('activeQuote', _drawDailyWeather)
        this.getWeather()

    }
    async getWeather() {
        try {
            await weatherService.getWeather()
            _drawDailyWeather()
        } catch (error) {
            console.log(error)
        }
    }


}