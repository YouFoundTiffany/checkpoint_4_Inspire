import { AppState } from "../AppState.js"


// @ts-ignore
const imageapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com',
    timeout: 8000
})


class ImagesService {
    async getImage() {
        const response = await imageapi.get('images')
        console.log('GOT IMAGES', response.data)
        AppState.image = response.data.results
        console.log(AppState.image)
    }


}

export const imagesService = new ImagesService()