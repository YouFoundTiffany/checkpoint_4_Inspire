import { AppState } from "../AppState.js"
// const weatherData = response.data
// const kelvinTemp = weatherData.main.temp

export class Weather {
    constructor(data) {
        this.weather = data.weather
        this.icon = data.icon
        this.coord = data.coord
        this.temp = data.temp
        this.name = data.name
        // FIXME create compute getters to compute the right numbers. Then create template getters for each value.
        this.c = computeCelcius
        this.f = computeFahrenheit

    }
    // get activeWeatherTemplate(){
    //     return `

    //     `
    // }


    get ComputedTemp(kelvinTemp) {
        const celsius = kelvinTemp - 273.15
        const fahrenheit = (celsius * 9 / 5) + 32

    }

    // <p>
    //   <label>Fahrenheit</label>
    //   <input id="inputFahrenheit" type="number" placeholder="Fahrenheit"
    //   oninput="temperatureConverter(this.value)"
    //   onchange="temperatureConverter(this.value)">
    // </p>
    // <p>Celsius: <span id="outputCelsius"></span></p>

}