import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        console.log('weather controller connected')
        // this.getWeather()
        // NOTE wait for the account to come back before trying  get req to the sandbox
        AppState.on('account', this.getWeather)
    }
    async getWeather() {
        await weatherService.getWeather()
    }
}