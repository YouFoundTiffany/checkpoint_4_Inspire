import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js";


// @ts-ignore
const weatherapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com',
    timeout: 8000
})


class WeatherService {
    async getWeather() {
        const response = await weatherapi.get('weather')
        console.log('GOT WEATHER', response.data)


    }


}

export const weatherService = new WeatherService()