window.onload = init;
function init() {
    generateQuote()
}

console.log(QUOTEBANK)

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * QUOTEBANK.length)
    let quote = QUOTEBANK[randomIndex].quote
    let author = QUOTEBANK[randomIndex].author
    document.getElementById("text").innerText = quote
    document.getElementById("author").innerText = author
    let twitterLink = 'https://twitter.com/intent/tweet?text='
    let quoteInApiFormat = quote.replace(/ /g, "%20")
    let authorInApiFormat = author.replace(/ /g, "%20")
    twitterLink += `"${quoteInApiFormat}"`
    twitterLink += " - " + authorInApiFormat
    document.getElementById('tweet-quote').href = twitterLink
}
