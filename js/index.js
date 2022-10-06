var quotes = [
{
  quote: `"You miss 100% of the shots you don't take."`,
  author: "Wayne Gretzy"
},
{
  quote: `"The best revenge is massive success."`,
  author: "Frank Sinatra"
},
{
  quote: `"Do not take life too seriously. You will not get out alive."`,
  author: "Elbert Hubbard"
},
{
  quote: `"It's not what happens to you, but how you react to it that matters."`,
  author: "Epictetus"
},
{
  quote: `"Do not take life too seriously. You will not get out alive."`,
  author: "Elbert Hubbard"
},
]

function newQuotes() {
  var quoteLenght = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-display").innerHTML = "Quote : " + quotes[quoteLenght].quote;
  document.getElementById("author-display").innerHTML = "Author : -- " + quotes[quoteLenght].author;
}