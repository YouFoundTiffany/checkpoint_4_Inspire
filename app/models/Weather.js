import { AppState } from "../AppState.js"

export class Weather {
    cosntructor(data) {
        this.name = data.name
        this.main = data.main
        this.weather = data.weather
    }
}




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
