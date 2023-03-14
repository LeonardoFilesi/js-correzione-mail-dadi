/* 
// Chiedi all'utente la sua email
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
} 
*/

/////////////////////////////////////////////////////////////////////////

// GIOCO DEI DADI

/* 
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
*/

//////////////////////////////////////////////////////////////////////////

// LEZIONE:

// PARTE 1
/* 
const word = "arrivederci";

// for (let i = 0; i < word.length; i++) {
//    console.log(word[i]);
// }

let reverseWord = "";
for (let i = word.length - 1; i>= 0; i--) {
    console.log(word[i]);
    reverseWord += word[i];
}
console.log(reverseWord); 
*/

// PARTE 2 : ARRAYS BIDIMENSIONALI:

/* 
const classes = [
    ["Diego", "Giada", "Paola", "Filippo"],
    ["Marco", "Giovanni", "Maria"],
    ["Giuseppe", "Olga", "Paolo"]
];

console.log(classes[0][0]);

for (let i = 0; i < classes.length; i++) {
    const currentClass = classes[i];
    console.log("Classe", i);

    for (let j = 0; j < currentClass.length; j++) {
        const currentStudent = currentClass[j];
        console.log(currentStudent);
    }
} 
*/

/* 
const items = document.getElementsByClassName("list-item");


for (let i = 0; i < items.length; i++) {
    const currentElement = items[i];
    currentElement.innerHTML = `item #${i}`;
} 
*/

// PARTE 3 : METODI DIVERSI DI ARRAY
// Ne vediamo alcuni

// Unione degli elementi-dati all'interno di un array:
// Join
const students = ["Diego", "Giada", "Paola", "Filippo"];
const studentsString = students.join("-");
console.log(studentsString);

// Ricerca dentro l'array:
// Includes
const hasStudent = students.includes("Diego");
console.log(hasStudent);
 // controllo, senza usare alcun ciclo "for"