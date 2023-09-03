import { AppState } from "../AppState.js";

import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuoteofDay() {
    let quoteofDay = AppState.quote
    if (quoteofDay) {
        setHTML('daily-quote', quoteofDay.dailyQuoteTemplate)
    }
}

function getQuotes() {

}

export class QuotesService {
    constructor() {
        console.log('Quotes Controller Logged in')


    }
}