

export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get aQuote() {
        return `
        <div class="text-light">
              <p class="fs-3 text-center p-3 quote-title">${this.content}</p>
              <p id="author-name" class="fs-5 text-center quote-author">${this.author}</p>
          </div>
        `
    }
}