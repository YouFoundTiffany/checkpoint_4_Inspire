import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { Pop } from "../utils/Pop.js"


// @ts-ignore
const quoteapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/',
    timeout: 8000
})



class QuotesService {
    async getQuote() {


        const response = await quoteapi.get('quotes')

        console.log('hello from getQuote', response)

        const quoteData = response.data

        const quote = new Quote(quoteData)
        console.log('this is the quote', quote)
        AppState.activeQuote = quote


    }

}



export const quotesService = new QuotesService()