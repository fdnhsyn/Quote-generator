const quoteContainer = document.getElementById('quote-genertor');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];
//show new quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //check if author field is bland and replace it with unknown

    if(!quote.author) {
        authorText.textContent = 'Unknown';
    }else {
        authorText.textContent = quote.author;}
        
        //Check Quote length to determine styling
        if(quote.text.length>50) {
            quoteText.classList.add('long-quote');
        } else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.textContent =quote.text;

}

//Get Quotes From API
async function getQUotes() {
    const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes= await response.json();
       newQuote();
    } catch(error){
        
    }
}

//tweete quote
function tweetQuote() {
    const quote =quoteText.innerText;
    const author =authorText.innerText;
    const twitterUrl =` https://twitter.com/intent/tweet?text=${quote} -${author}`;
    window.open(twitterUrl, '_blank');
 
    // const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // window.open(twitterUrl, '_blank');
}

//event listeners

newQuoteBtn.addEventListener('click', newQuote);
//twitterBtn.addEventListener('click',tweetQuote);
//On Load
getQUotes();
//newQuote();
