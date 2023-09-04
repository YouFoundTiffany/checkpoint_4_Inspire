import { AppState } from "../AppState.js"


// @ts-ignore
const quoteapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com',
    timeout: 8000
})


class QuotesService {
    async getQuote() {
        console.log('quotes service connected')
        const response = await fetch('https://sandbox.codeworksacademy.com/api/quotes')
        const data = await response.json()
        console.log(data.description)
        // const response = await imageapi.get('images')
        // console.log('GOT IMAGES', response.data)
        // AppState.activeImage = new Image(response.data)
        // console.log(AppState.activeImage)
    }


}

export const quotesService = new QuotesService()