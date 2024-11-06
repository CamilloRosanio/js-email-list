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

/* PSEUDO CODICE
1   implemento il FETCH
2   il FETCH rende un valore (email in questo caso), e mi assicuro che possa essere utilizzata in una funzione che implementerò nel THEN
3   dichiaro il primo Elemento HTML che andò ad usare, cioè il DIV che conterrà le Email (NODE)
4   creo la FUNCTION che aggiungerà il NODE (email in questo caso) al mio DOM
*/



// DICHIARO GLI ELEMENTI HTML
const emailList = document.getElementById('emailList');
let addedEmail = document.createElement('li');

addedEmail.classList.add('list-group-item');
addedEmail.innerHTML=`
<div class="row">
    <div class="col-10 d-flex align-items-center">
        <p class="m-0 text-primary"><i class="fa-solid fa-envelope"></i> INDIRIZZO_EMAIL</p>
    </div>
    <div class="col-2 d-flex justify-content-between align-items-center">
        <button class="btn btn-sm btn-secondary">
            Send message
        </button>

        <i class="fa-solid fa-trash text-secondary"></i>
    </div>
</div>
`;



fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then( (result) => {
        console.log(result.response);

        // ALERT DI CONTROLLO
        // alert(result.response);
    })


emailList.appendChild(addedEmail);

