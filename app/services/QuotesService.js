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
        // debugger
        try {
            console.log('quotes service connected')
            // api request get request
            const response = await quoteapi.get('quotes')
            // This logged first before the controller
            console.log('hello from getQuote', response)
            // wait to parse json result
            const quoteData = response.data
            // NOTE - !!!!!!!!!THIS KEEPS MESSING YOU UP!!!!!!  ENSURE THAT THE 'content' word matches your MODEL!!!!!!!!
            if (!quoteData || !quoteData.content) {
                throw new Error('invalid quote data')
            }
            // const apiData = await response.json()
            const quote = new Quote(quoteData)
            console.log('this is the quote', quote)
            AppState.activeQuote = quote
        } catch (error) {
            Pop.error(error)
        }

    }


}

export const quotesService = new QuotesService()