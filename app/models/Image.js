import { AppState } from "../AppState.js"


export class Image {
    constructor(data) {
        this.url = data.url
        this.imgUrl = data.imgUrl
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl

    }
}




// {
//     "url": {
//         "type": "String"
//     },
//     "imgUrl": {
//         "type": "String"
//     },
//     "query": {
//         "type": "String"
//     },
//     "author": {
//         "type": "String"
//     },
//     "largeImgUrl": {
//         "type": "String"
//     }
// }
