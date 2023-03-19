import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { quoteService } from "../Services/QuoteService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuotes() {
    const quote = appState.quote

    setHTML('quote-box', quote.aQuote)
}

function _drawAuthor() {
    let quoteAuthor = document.getElementById('author-name')
    if (appState.isHidden) {
        quoteAuthor.style.visibility = 'hidden'
    } else {
        quoteAuthor.style.visibility = 'visible'
    }
}

export class QuoteController {
    constructor() {
        appState.on('isHidden', _drawAuthor)
        appState.on('quote', _drawQuotes)
        this.aQuote()
    }

    async aQuote() {
        try {
            await quoteService.aQuote()
        } catch (error) {
            Pop.error(error)
        }
    }

    toggleDisplay() {
        console.log('is hidden', appState.quote);
        quoteService.toggleHidden()
    }
}