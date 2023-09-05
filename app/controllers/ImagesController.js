import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawDailyImage() {
    // console.log('drawing daily image')
    let image = AppState.activeImage
    if (image.url) {
        document.body.style.backgroundImage = `url(${image.url})`
    } else {
        console.error('no active Image')
    }
    // if (!image) {
    //     document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1682687220499-d9c06b872eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
    // }

}
export class ImagesController {
    constructor() {
        // console.log('images controller connected')
        // this.getImage()
        //  wait for the account to come back before trying  get req to the sandbox
        AppState.on('account')
        AppState.on('user')

        AppState.on('activeImage', _drawDailyImage)
        this.getImage()//getting the ijmage data
        // console.log('drawing daily image')
    }
    async getImage() {
        try {
            await imagesService.getImage()
            // _drawDailyImage()
        } catch (error) {
            console.log(error)
        }
    }
}