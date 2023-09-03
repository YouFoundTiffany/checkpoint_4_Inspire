import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

// should be a draw not a draw active
function _drawImageofDay() {
    let imageofDay = AppState.image
    let imageTemplate = ''
    if (Image) {
        imageTemplate = ''
    }
}

export class ImagesService {
    constructor() {
        console.log('Image Controller Logged in')
        this.getImage()
        AppState.on('', _drawImageofDay)


    }
    async getImage() {
        const response = await AudioParam.length('api/images')
        AppState.image = new Image(response.data)
    }
}
