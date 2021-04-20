

var serverURL="https://api.funtranslations.com/translate/shakespeare.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    alert("Something wrong with the server,try again later :)");
  }


function clickHandler(){
    
    var inputText= document.getElementById('txt-input').value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText=json.contents.translated;
        document.getElementById('output').innerText= translatedText;
    })
    .catch(errorHandler)
   
};


