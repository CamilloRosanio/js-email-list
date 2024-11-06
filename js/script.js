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


// Dichiaro la mia <ul> come Elemento HTML
const emailList = document.getElementById('emailList');

// Dichiaro la variabile che stabilisce il numero di Email da aggiungere
const emailNumber = 10;



// Dichiaro la FUNCTION per aggiungere le Email alla lista
let addEmail = ( (repetitions) => {

    for (let i=0; i < repetitions; i++) {

        // FETCH del valore tramite API
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then( (output) => {

            // Dichiaro il valore output del FETCH
            let Email = output.response;

            // Dichiaro la variabile che sarà poi creata tramite appendChild alla mia lista di Email
            let myItem = document.createElement('li');
    
            // Definisco CLASS + innerHTML del mio <li> (Email) da aggiungere
            myItem.setAttribute('id', `Email ${i}`);
            myItem.classList.add('list-group-item', 'my-2');
            myItem.innerHTML=`
            <div class="row">
                <div class="col-10 d-flex align-items-center">
                    <p class="m-0 text-primary"><i class="fa-solid fa-envelope"></i> ${Email}</p>
                </div>
                <div class="col-2 d-flex justify-content-between align-items-center">
                    <button class="btn btn-sm btn-secondary">
                        Send message
                    </button>
                    <i class="fa-solid fa-trash text-secondary"></i>
                </div>
            </div>
            `;

            // CREAZIONE NODE <li>
            emailList.appendChild(myItem);

        })
        
    }  

})








addEmail(emailNumber);





// // Definisco CLASS + innerHTML del mio <li> (Email) da aggiungere
            // myItem.setAttribute('id', `Email ${i + 1}`);
            // myItem.classList.add('list-group-item', 'my-2');
            // myItem.innerHTML=`
            // <div class="row">
            //     <div class="col-10 d-flex align-items-center">
            //         <p class="m-0 text-primary"><i class="fa-solid fa-envelope"></i> ${Email}</p>
            //     </div>
            //     <div class="col-2 d-flex justify-content-between align-items-center">
            //         <button class="btn btn-sm btn-secondary">
            //             Send message
            //         </button>
            //         <i class="fa-solid fa-trash text-secondary"></i>
            //     </div>
            // </div>
            // `;

            // // CREAZIONE NODE <li>
            // emailList.appendChild(myItem);