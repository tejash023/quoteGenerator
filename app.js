const quoteButton = document.querySelector('.next-quote');


quoteButton.addEventListener('click', generateQuotes);

window.onload = generateQuotes;

function generateQuotes(){

  const targetURL = 'https://type.fit/api/quotes';
  const xhr = new XMLHttpRequest();

  xhr.open('GET', targetURL, true);

  xhr.onload = function(){{
    const JSONResponse = JSON.parse(this.response);
    //console.log(JSONResponse);
    let author;
    let randomNumber = Math.floor((Math.random() * 1000) + 1);
    let quote = JSONResponse[randomNumber].text;
    if(JSONResponse[randomNumber].author !== null){
      author = JSONResponse[randomNumber].author;
    }else{
      author = 'Unknown';
    }
    
    let output = `<h2 class="quote-text"> ${quote} </h2>
                  <p class="quote-author">- ${author}</p>`;
    document.querySelector('.quotes-content').innerHTML = output;
  }}

  xhr.send();
}