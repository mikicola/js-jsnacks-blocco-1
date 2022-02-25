// Snack 1
// l'utente inserisce due numeri in successione, con due prompt. il software stampa il maggiore
// const numero1 = parseInt(prompt("inserisci numero 1"));
// const numero2 = parseInt(prompt("inserisci numero 2"));

// if(numero1 > numero2){
//     alert(numero1);
// }
// else if(numero2 > numero1){
//     alert(numero2);
// }
// else{
//     alert ("i numeri sono uguali")
// }




/////////////////////////////////////////////////////////////////////
// Snack 2
// l'utente inserisce 2 parole in successione, con 2 propt. 
// il software stampa prima la parola più corta poi quella piu lunga

// const parola1 = (prompt('parola 1:'));
// const parola2 = (prompt('parola 2:'));
// const risultato = document.querySelector('.risultato')

// if (parola1.length > parola2.length) {
//     risultato.innerHTML = parola1 + " " + parola2
// }
// else if(parola2.length > parola1.length) {
//     risultato.innerHTML = parola2 + " " + parola1
// }
// else{
//     risultato.innerHTML = "le due parole hanno la stessa lunghezza"
// }

/////////////////////////////////////////////////////////////////////
// Snack 3
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