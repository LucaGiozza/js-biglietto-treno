

// Il programma dovrà chiedere all'utente
//  il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare
//  il prezzo totale del viaggio, secondo queste regole:
//  il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni
//   va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



var distanza =  prompt('Numero di km che vuoi percorrere');
distanza = parseInt(distanza);
console.log(distanza);

var eta =  prompt('Età del passeggero');
eta = parseInt(eta);
console.log(eta);


 var prezzo = distanza * 0.21;
 var sconto = prezzo ;

 if (eta < 18) {
     sconto = prezzo * 80 / 100;

 } else if (eta > 65 ){
     sconto = prezzo * 60 / 100;

 } 
 
 
 sconto = sconto.toFixed( 2 ); 

 document.getElementById('prezzo').innerHTML=sconto;

//  altrimenti potevo mettere :
//  document.getElementById('prezzo').innerHTML=sconto.toFixed(2);

console.log(sconto);
