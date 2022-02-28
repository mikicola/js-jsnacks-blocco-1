// Snack 1
// l'utente inserisce due numeri in successione, con due prompt. il software stampa il maggiore

/*
const numero1 = parseInt(prompt("inserisci numero 1"));
const numero2 = parseInt(prompt("inserisci numero 2"));

if(numero1 > numero2){
    alert(numero1);
}
else if(numero2 > numero1){
    alert(numero2);
}
else{
    alert ("i numeri sono uguali")
}
*/



/////////////////////////////////////////////////////////////////////
// Snack 2
// l'utente inserisce 2 parole in successione, con 2 propt. 
// il software stampa prima la parola più corta poi quella piu lunga

/*
const parola1 = (prompt('parola 1:'));
const parola2 = (prompt('parola 2:'));
const risultato = document.querySelector('.risultato')

if (parola1.length > parola2.length) {
    risultato.innerHTML = parola1 + " " + parola2
}
else if(parola2.length > parola1.length) {
    risultato.innerHTML = parola2 + " " + parola1
}
else{
    risultato.innerHTML = "le due parole hanno la stessa lunghezza"
}
*/



/////////////////////////////////////////////////////////////////////
// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// (provatelo anche senza array)
/*
let arrNumbers =[];

for (i = 0; i < 10; i++){
    let userNumber = parseInt(prompt("inserisci un numero"));
    arrNumbers.push(userNumber);
}
console.log(arrNumbers);

let sommaNumbers = 0;
for (i =0; i< arrNumbers.length; i++){
    sommaNumbers = sommaNumbers + arrNumbers[i];
}
alert(sommaNumbers)
*/



/////////////////////////////////////////////////////////////////////
// Snack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.
/*
const userName = prompt("Inserisci il tuo nome");

const invitati = ['Gatsby', 'Michela', 'Henri', 'Mauro', 'Gabriel', 'Chiara'];

let presente = false;

for(let i = 0; i < invitati.length; i++){
    if(invitati[i] == userName){
        presente = true;   
    }
}

if(presente){
    console.log("benvenuto/a!");
    document.querySelector(".message").innerHTML = "Benvenuto/a!"
}
else{
    console.log("vai via pezzente!");
    document.querySelector(".message").innerHTML = "Vai via pezzente!"
}
*/



/////////////////////////////////////////////////////////////////////
// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

/*
let numDispari = [];


for (let i = 0; i < 6; i++){
    let number = parseInt(prompt("dimmi un numero"));
    if (number % 2 == 1) {
        numDispari.push(number)
    }
}
console.log(numDispari)

*/


/////////////////////////////////////////////////////////////////////
// Snack 1.9
// calcola somma e media dei primi 10 numeri

/*
let somma = 0;
for (let i = 1; i <= 10; i++){
    somma += i;
    // console.log(i)
}

let media = somma / 10;

console.log(somma)
console.log(media)
*/


/////////////////////////////////////////////////////////////////////
// Snack 2.1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
/*
let somma = 0;
let arrNumeri = [];

for (i = 0; i < 5; i++) {
    let numUtente = parseInt(prompt("inserisci un numero"));
    arrNumeri.push(numUtente);
}
console.log(arrNumeri)

for (i = 0; i < arrNumeri.length; i++) {
    somma = somma + arrNumeri[i]
}

console.log("la somma dei numeri è: " + somma)
*/


/////////////////////////////////////////////////////////////////////
// Snack 2.2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let numero = parseInt(prompt("inserisci un numero"));
let uno = parseInt(1);

if (numero % 2 == 0){
    console.log(numero)
}

if (numero % 2 == 1){
    console.log(numero + uno)
}