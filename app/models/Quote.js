import { AppState } from "../AppState.js"

export class Quote {
    constructor(data) {
        this._id = data._id || data.id || ''
        this.content = data.content || ''
        this.tags = data.tags || []
        this.description = data.description || ''
        this.author = data.author || ''
    }

    get QuoteTemplate() {
        // REVIEW the style and layout of the elements and how they interact with the id in the router
        return `
        <p>${this.author}</p>
        <p>${this.content}</p>
        `
    }

}