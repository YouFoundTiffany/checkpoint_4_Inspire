import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
function _drawDailyWeather() {
    // console.log('drawing daily weather')
    const weather = AppState.activeWeather //supposed to be quote = null
    let dailyWeather = AppState.activeWeather
    // if (weather) {
    //     const weatherTemplate=
    // }

    // let template = ''
    // setHTML('weather', template)

}


export class WeatherController {
    constructor() {

        //  wait for the account to come back before trying  get req to the sandbox
        // @ts-ignore
        AppState.on('account', this.getWeather)
        // @ts-ignore
        // AppState.on('user', this.getWeather)

        AppState.on('activeQuote', _drawDailyWeather)
        this.getWeather()//getting the quote data
        // console.log('drawing daily quote')
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