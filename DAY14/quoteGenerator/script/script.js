const quoteContainer =document.getElementById('quote-container');
const quoteText =document.getElementById('quote');
const authorText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuotesBtn =document.getElementById('new-quote');

// get quotes from an API

let apiQuotes = []

// display new quotes
function newQuotes(){
    // pick a random quote 
    const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quotes.author;
    quoteText.textContent = quotes.text;
    // console.log(quotes);
}
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'

    try{
        const response = await fetch(apiURL)
        apiQuotes = await response.json();
        newQuotes()
    }
    catch(err){
        // catch error here
    }
}

// On load
getQuotes();
