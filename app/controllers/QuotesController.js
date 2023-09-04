import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuotesController {
    constructor() {
        console.log('quotes controller connected')
        // this.getQuote()
        // NOTE wait for the account to come back before trying  get req to the sandbox
        AppState.on('account', this.getQuote)
    }
    async getQuote() {
        await quotesService.getQuote()
    }
}