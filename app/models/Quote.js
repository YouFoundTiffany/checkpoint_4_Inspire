import { AppState } from "../AppState.js"

export class Quote {
    cosntructor(data) {
        this.quote = data.quote
        this.description = data.description
    }
}





// {
//     "quote": {
//         "body": { },
//         "author": { },
//         "tags": [
//             {}
//         ]
//     },
//     "description": {
//         "type": "String",
//             "required": true
//     }
// }
