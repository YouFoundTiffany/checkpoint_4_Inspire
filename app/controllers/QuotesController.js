import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawDailyQuote() {
    // console.log('drawing daily quote')
    const quote = AppState.activeQuote //supposed to be quote = null
    let quotes = AppState.activeQuote
    let template = ''
    // FIXME need get template from quote to set into the HTML
    setHTML('quotes', template)

}


export class QuotesController {
    constructor() {

        // console.log('images controller connected')
        // this.getImage()
        //  wait for the account to come back before trying  get req to the sandbox
        // @ts-ignore
        AppState.on('account')
        // @ts-ignore
        AppState.on('user')

        AppState.on('activeQuote', _drawDailyQuote)
        this.getQuote()//getting the quote data
        // console.log('drawing daily quote')
    }
    async getQuote() {
        try {
            await quotesService.getQuote()
            _drawDailyQuote()
        } catch (error) {
            console.log(error)
        }
        // }
        // drawQuote() {
        //     const quote = AppState.activeQuote
        //     if (!quote) { return }
        //     const quoteHtml = quote.QuoteTemplate(quote)
        //     document.getElementById('quote-div')
        //     ?.innerHTML=quoteHtml
    }


}