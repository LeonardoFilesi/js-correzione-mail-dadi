/* // Chiedi all'utente la sua email
// Controlla che sia nella lista di chi può accedere
// Stampa un messaggio appropriato per controllo

const users = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];

// INPUT
//  Chiedere all'utente l'email
const userMail = prompt("Dimmi la tua email");

// Per ogni email della lista
// Se l'email è uguale a quella dell'utente
// salvo true nella variabile isFound
let isFound = false;
for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    if (currentUser === userMail); {
        isFound = true;
    }
    console.log(i, currentUser, isFound);
}

// Se isFound is true
// l'utente può accedere
// Altrimenti 
// non può accedere
if (isFound) {
    console.log("Benvenuto utente, puoi accedere");
} else {
    console.log("Non sei registrato, non puoi accedere");
} */

/////////////////////////////////////////////////////////////////////////

// GIOCO DEI DADI

const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, computerNumber);

// Se userNumber > computerNumber
// Hai vinto
// Altrimenti 
// Ha vinto il computer
// Altrimenti 
// Pareggio
let message = "";
if (userNumber > computerNumber) {
    message = "Hai vinto, congratulazioni!!!";
} else if (userNumber < computerNumber) {
    message = "Peccato, hai perso, ritenta!";
} else {
    message = "Pareggio!";
}
console.log(message);