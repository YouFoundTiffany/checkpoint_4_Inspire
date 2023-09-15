import { AppState } from "../AppState.js"


export class Image {
    constructor(data) {
        this.url = data.largeImgUrl || data.imgUrl || data.hdurl || data.url || ''
        this.query = data.query
        this.author = data.author
        this.imageUrl = data.url
    }


    get imageNameTemplate() {
        return `
        <p>Image Author <br>${this.author}</p>
        `
    }
}