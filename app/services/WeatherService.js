import { AppState } from "../AppState.js"


// @ts-ignore
const weatherapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/',
    timeout: 8000
})


class WeatherService {
    async getWeather() {
        // console.log('weather service connected')
        const response = await fetch('https://sandbox.codeworksacademy.com/api/weather')
        const data = await response.json()
        // console.log(data.weather)
        // const response = await imageapi.get('images')
        // console.log('GOT IMAGES', response.data)
        // AppState.activeImage = new Image(response.data)
        // console.log(AppState.activeImage)
    }


}

export const weatherService = new WeatherService()