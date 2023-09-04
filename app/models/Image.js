import { AppState } from "../AppState.js"


export class Image {
    constructor(data) {
        this.url = data.largeImgUrl || data.imgUrl || data.hdurl || data.url || ''
        this.query = data.query
        this.author = data.author
        this.imageUrl = data.url
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
