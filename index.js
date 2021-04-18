

var serverURL="https://api.funtranslations.com/translate/shakespeare.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(){
    console.log("error occured",error);
    alert("something wrong with server ! Try after sometime")
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


