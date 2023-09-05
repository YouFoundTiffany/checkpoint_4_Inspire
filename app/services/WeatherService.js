import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { Pop } from "../utils/Pop.js"
Weather

// @ts-ignore
const weatherapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/',
    timeout: 8000
})


class WeatherService {
    async getWeather() {
        // debugger
        try {
            console.log('weather service connected')
            // api request get request
            const response = await weatherapi.get('weather')
            // This logged first before the controller
            console.log('hello from getWeather', response)
            const weatherData = response.data
            // NOTE - !!!!!!!!!THIS KEEPS MESSING YOU UP!!!!!!  ENSURE THAT THE 'content' word matches your MODEL!!!!!!!!
            if (!weatherData || !weatherData.data) {
                throw new Error('invalid weather data')
            }
            // const apiData = await response.json()
            const dailyForecast = new Weather(weatherData)
            console.log('this is the weather', dailyForecast)
            AppState.activeWeather = d
        } catch (error) {
            Pop.error(error)
        }

    }


}

export const weatherService = new WeatherService()