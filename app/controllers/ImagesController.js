import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawDailyImage() {
    // console.log('drawing daily image')
    let image = AppState.activeImage
    // @ts-ignore
    if (image.url) {
        // @ts-ignore
        document.body.style.backgroundImage = `url(${image.url})`
        let activeImage = AppState.activeImage
        setHTML('img-name', activeImage?.imageNameTemplate)
    } else {
        console.error('no active Image')
    }

}
export class ImagesController {
    constructor() {


        AppState.on('activeImage', _drawDailyImage)
        this.getImage()
        // console.log('drawing daily image')
    }
    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.log(error)
        }
    }
}