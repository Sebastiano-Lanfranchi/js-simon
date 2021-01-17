// repo/cartella js-simon
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.

var numeriPc = [];

var numeriPc = [];
while(numeriPc.length < 5){
  var number = randomNumber(1, 100);
  if(numeriPc.includes(number) == false) {
    numeriPc.push(number);
  }
}
alert(numeriPc);
console.log(numeriPc);

var timeleft = 29;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    promptResult();
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

// setTimeout(promptResult, 3000);




function randomNumber(min, max) {

    var rand = Math.floor( Math.random() * (max - min +1) ) + min;

    return rand;
}

function promptResult (){
  var arrayResult = []; // var contatore = 0;
  var listaNumeri = [];
  var i = 1;
  while(i < 6){
    var result = parseInt(prompt('Inserisci il ' + i + ' numero'));
    if (numeriPc.includes(result)) {
      arrayResult.push(result);
      // ++contatore & listaNumeri.push(arrayResult);
    }
    i++;
  }


  var j = 0;
  while(j < numeriPc.length){
      if(arrayResult[j] == numeriPc[j]){
        listaNumeri.push(arrayResult[j]);
      }
      j++;
    }
                            //contatore
  alert('Hai indovinato ' + listaNumeri.length + ' numeri');
  alert('I numeri che hai indovinato sono ' + listaNumeri);

}
