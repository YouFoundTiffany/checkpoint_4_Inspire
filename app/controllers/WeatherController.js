import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeatherofDay() {
    let weatherofDay = AppState.weather
    if (weatherofDay) {
        setHTML('daily-weather', weatherofDay.dailyWeatherTemplate)
    }
}

export class WeatherService {
    constructor() {
        console.log('Weather Controller Logged in')
        this._drawWeatherofDay()

    }
}