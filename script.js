
const quote = document.getElementById("quote");
const author = document.getElementById("author");


const api_url = "https://dummyjson.com/quotes/random";
async function getquote(url) {
  try{
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  }
  catch (error){
    console.log("fetch error:", error);
  }
}

getquote(api_url);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + ")_ _ _ by " + author.innerHTML, "Tweet Window", "width =600, height=300");
}