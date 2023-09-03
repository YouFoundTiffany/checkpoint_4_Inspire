import { AppState } from "../AppState.js"



// @ts-ignore
const quoteapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com',
    timeout: 8000
})


class QuotesService {
    async getQuotes() {
        const response = await quoteapi.get('quotes')
        console.log('GOT QUOTE', response.data)


    }


}

export const quoteService = new QuotesService()