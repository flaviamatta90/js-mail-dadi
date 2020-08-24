// Chiedi all’utente la sua email//
var mailUtente = prompt('Inserisci la tua Mail');
console.log(mailUtente);


// controlla che sia nella lista di chi può accedere,
var mail = ["mahou90@hotmail.it", "flaviamatta90@gmail.com", "lukijeddu@libero.it"];

var mailGiusta = false;

for(var i = 0; i < mail.lenght; i++){
  var email = mail[i];

  if(mailUtente == email){
    mailGiusta = true;
  }
}

// stampa un messaggio appropriato sull’esito del controllo.

if (mailGiusta == true) {
  console.log ("Email Corretta");
} else if(mailGiusta == false){
  console.log ("Email Sbagliata");
  }
