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


// Dichiaro gli Elementi HTML
const emailList = document.getElementById('emailList');
const refreshButton = document.getElementById('refreshEmails_btn');

// Dichiaro la variabile che stabilisce il numero di Email da aggiungere
const repetitionsNumber = 10;

// Dichiaro la radice dell ID da assegnare a ciascun NODE che rappresenta una Email
const nodeIdRoot = 'addedEmail_';





/**********************************************************
| # CORREZIONE FUNZIONE
*********************************************************/

/*
Per far caricare il DOM 1 sola volta invece che per ogni ITEM, basta fare un Array di Email dichiarato prima del FETCH,
poi PUSHARE le Email al suo interno, e all'interno del FETCH dirgli che finchè non ho tanti elementi quanti la LENGHT del mio Array,
allora non modifico ancora il DOM.
*/

const finalItemsNumber = [];


// Dichiaro la FUNCTION per aggiungere le Email alla lista
let addEmail = ( (repetitions) => {

    for (let i=0; i < repetitions; i++) {

        // FETCH del valore tramite API
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then( (output) => {

            // Dichiaro il valore output del FETCH
            let Email = output.response;

            finalItemsNumber.push(Email);



            // QUI INSERISCO L'IF PE CARICARE UNA SOLA VOLTA IL DOM IN BASE ALL'ARRAY.LENGHT

            emailList.innerHTML += `
            <li class="list-group-item my-2">
                <div class="row">
                    <div class="col-10 d-flex align-items-center">
                        <p class="m-0 text-primary" id="${nodeIdRoot}${i}"><i class="fa-solid fa-envelope"></i> ${Email}</p>
                    </div>
                    <div class="col-2 d-flex justify-content-between align-items-center">
                        <button class="btn btn-sm btn-secondary">
                            Send message
                        </button>
                        <i class="fa-solid fa-trash text-secondary"></i>
                    </div>
                </div>
            </li>
            `;

        })
        
    }  

})






/**********************************************************
| # SOLUZIONE INIZIALE STUDENTE
*********************************************************/



// // Dichiaro la FUNCTION per aggiungere le Email alla lista
// let addEmail = ( (repetitions) => {

//     for (let i=0; i < repetitions; i++) {

//         // FETCH del valore tramite API
//         fetch('https://flynn.boolean.careers/exercises/api/random/mail')
//         .then(response => response.json())
//         .then( (output) => {

//             // Dichiaro il valore output del FETCH
//             let Email = output.response;

//             // Dichiaro la variabile che sarà poi creata tramite appendChild alla mia lista di Email
//             let myItem = document.createElement('li');
    
//             // Definisco CLASS + innerHTML del mio <li> (Email) da aggiungere
//             // myItem.setAttribute('id', `${nodeIdRoot}${i}`);
//             myItem.classList.add('list-group-item', 'my-2');
//             myItem.innerHTML=`
//             <div class="row">
//                 <div class="col-10 d-flex align-items-center">
//                     <p class="m-0 text-primary" id="${nodeIdRoot}${i}"><i class="fa-solid fa-envelope"></i> ${Email}</p>
//                 </div>
//                 <div class="col-2 d-flex justify-content-between align-items-center">
//                     <button class="btn btn-sm btn-secondary">
//                         Send message
//                     </button>
//                     <i class="fa-solid fa-trash text-secondary"></i>
//                 </div>
//             </div>
//             `;

//             // CREAZIONE NODE <li>
//             emailList.appendChild(myItem);

//         })
        
//     }  

// })





// Dichiaro la FUNCTION per refreshare la lista tramite SOSTITUZIONE delle Email
let refreshEmail = ( (repetitions) => {

    for (let i=0; i < repetitions; i++) {

        // FETCH del valore tramite API
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then( (output) => {

            // Dichiaro il valore output del FETCH
            let Email = output.response;

            // Dichiaro l'elemento HTML dove inserire la nuova Email
            let refreshedEmail = document.getElementById(`${nodeIdRoot}${i}`);
    
            // Aggiorno l'innerHTML dell'elemento
            refreshedEmail.innerHTML = `<i class="fa-solid fa-envelope"></i> ${Email}`;

        })
        
    }  

})


// Eseguo la funzione al caricamento della pagina
addEmail(repetitionsNumber);

// Al click, eseguo la funzione di refresh
refreshButton.addEventListener('click', () => {
    refreshEmail(repetitionsNumber);
});