import { appState } from "../AppState.js";
import { quoteApi } from "./AxiosService.js";
import { Quote } from "../Models/Quote.js";

class QuoteService {

    async aQuote() {
        const res = await quoteApi.get('')
        console.log('[QUOTES]', res);
        appState.quote = new Quote(res.data)
    }

    toggleHidden() {
        appState.isHidden = !appState.isHidden
    }
}

export const quoteService = new QuoteService()