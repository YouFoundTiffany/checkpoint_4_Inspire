import { AppState } from "../AppState.js"
const weatherData = response.data
const kelvinTemp = weatherData.main.temp

export class Weather {
    cosntructor(data) {
        this.weather = data.weather
        this.icon = data.icon
        this.coord = data.coord
        this.temp = data.temp
        this.name = data.name
    }

    // get WeatherTemplate(){
    //     return ``
    // }


    get ComputeTemp(kelvinTemp) {
        const celsius = kelvinTemp - 273.15
        const fahrenheit = (celsius * 9 / 5) + 32

    }



}


// "coord": {
//     "lon": -116.2035,
//         "lat": 43.6135
// },
// "weather": {
//     "0": {
//         "id": 800,
//             "main": "Clear",
//                 "description": "clear sky",
//                     "icon": "01n"
//     },
//     "icon": "https://openweathermap.org/img/wn/undefined.png"
// },
// "base": "stations",
//     "main": {
//     "temp": 290.71,
//         "feels_like": 290.14,
//             "temp_min": 288.43,
//                 "temp_max": 292.45,
//                     "pressure": 1015,
//                         "humidity": 62
// },
// "visibility": 10000,
//     "wind": {
//     "speed": 1.54,
//         "deg": 50
// },
// "clouds": {
//     "all": 0
// },
// "dt": 1693887900,
//     "sys": {
//     "type": 1,
//         "id": 3479,
//             "country": "US",
//                 "sunrise": 1693833112,
//                     "sunset": 1693880180
// },
// "timezone": -21600,
//     "id": 5586437,
//         "name": "Boise",
//             "cod": 200,
//                 "origin": "https://openweathermap.org"
// }
// {
//     "name": {
//         "type": "String"
//     },
//     "main": {
//         "temp": {
//             "type": "Number"
//         }
//     },
//     "weather": [
//         {
//             "description": {
//                 "type": "String"
//             }
//         }
//     ]
// }
