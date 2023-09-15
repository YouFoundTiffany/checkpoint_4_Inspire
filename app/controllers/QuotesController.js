import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { setHTML } from "../utils/Writer.js";


function _drawDailyQuote() {
    // console.log('drawing daily quote')
    let activeQuote = AppState.activeQuote
    setHTML('thequote', activeQuote?.quoteTemplate)


}


export class QuotesController {
    constructor() {



        AppState.on('activeQuote', _drawDailyQuote)
        this.getQuote()

    }
    async getQuote() {
        try {

            const response = await quotesService.getQuote()
            _drawDailyQuote()
        } catch (error) {
            console.log(error)
        }
    }


}
