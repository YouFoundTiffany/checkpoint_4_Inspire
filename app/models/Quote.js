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
        return `
  <div>
    <p>${this.author}</p>
    <p>${this.content}</p>
  </div>
            `
    }

}