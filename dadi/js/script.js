// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// 1 facciamo scegliere un numero al giocatore da 1 a 6
var numeroGiocatore = Math.floor(Math.random() * 6) + 1;

var numeroRandom = Math.floor(Math.random() * 6) + 1;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(numeroGiocatore > numeroRandom){
  console.log('Il tuo numero ' + numeroGiocatore + ' è il più alto! Hai Vinto!!')
} else if(numeroRandom > numeroGiocatore)
{
  console.log('Il numero del computer ' + numeroRandom + ' è più alto del tuo! Hai Perso!!')
} else
{
  console.log('I numeri sono uguali ' + numeroGiocatore + ' ' + numeroRandom);
}
