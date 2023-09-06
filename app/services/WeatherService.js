import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { Pop } from "../utils/Pop.js"

// @ts-ignore
const weatherapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/',
    timeout: 8000
})


class WeatherService {
    async getWeather() {
        // debugger

            // console.log('weather service connected')
            // api request get request
            const response = await weatherapi.get('weather')
            // This logged first before the controller
            // console.log('hello from getWeather', response)
            const weatherData = response.data

            const dailyForecast = new Weather(weatherData)
            console.log('this is the weather', dailyForecast)
            AppState.activeWeather = dailyForecast



    }


}

export const weatherService = new WeatherService()