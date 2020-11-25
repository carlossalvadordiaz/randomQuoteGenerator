// Capture elements
let displayQuote = document.getElementById('quoteDisplay')
let displayClock = document.getElementById('clockDisplay')



// Clock Simple
let clock = setInterval(() => {
    displayClock.innerHTML = `${new Date().toLocaleTimeString()} <br> ${new Date().toDateString()}`;
}, 1000)


/* generate random quote */

let newQuote = () => {
    let randomNumber = Math.floor(Math.random() * (quotes.length))
    return displayQuote.innerHTML = '"' + quotes[randomNumber] + '"'
};
