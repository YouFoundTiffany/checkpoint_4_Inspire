import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { Pop } from "../utils/Pop.js"




// @ts-ignore
const imageapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/',
    timeout: 8000
})




class ImagesService {
    async getImage() {
        // debugger
        try {
            console.log('images service connected')
            // api request get request
            const response = await imageapi.get('images')
            console.log('hello from getImage', response)
            // wait to parse json result
            const imageData = response.data
            if (!imageData || !imageData.url) {
                throw new Error ('invalid image data')
            }
            // const apiData = await response.json()
            console.log('json stuff', imageData)
            // const response = await fetch('https://sandbox.codeworksacademy.com/api/images')

            // construct the ijmage passing on the parsed json
            const image = new Image(imageData)
            console.log('this is the image', image)

            AppState.activeImage = image
        } catch (error) {
            Pop.error(error)
        }

    }


}

export const imagesService = new ImagesService()