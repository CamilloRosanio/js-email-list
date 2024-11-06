/**********************************************************
| # CONSEGNA
*********************************************************/

/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre)
*/



/**********************************************************
| # SVOLGIMENTO
*********************************************************/

fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then( (result) => {
        console.log(result.response);
    })