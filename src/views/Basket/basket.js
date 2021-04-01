
class Basket {
    Constructor (idProduit, nomProduit, image, price, choiceOption) {
        this.id = idProduit;
        this.name = nomProduit;
        this.image = image;
        this.decription = description;
        this.price = price;
        this.lenses = choiceOption;
    }
}

// Function empty basket 
function yourBasketIsEmpty() {
    const empty = document.getElementById('empty-basket');
    let emptyBasket = document.createElement ('h3');
    emptyBasket.innerHTML = "Votre panier est vide !";
    empty.appendChild(emptyBasket);
};


//~~~~~~~~~~~~~~~~~~~~ Local storage ~~~~~~~~~~~~~~~~~~~~//

// Récupération des valeurs 

// Variable key/value du local storage
const localStorageProduct = JSON.parse (localStorage.getItem("basket"));  // Convertir les données JSON du localStorage en JS 


//~~~~~~~~~~~~~~~~~~~~ Affichage des produits dans le paniers ~~~~~~~~~~~~~~~~~~~~//
const tableElt = document.getElementById('table');


// Le tableau est-il vide ? 
if (localStorageProduct === null || localStorageProduct == 0) { 
    yourBasketIsEmpty();
}

else {  // S'il n'est pas vide -> afficher produit
    
    let structurePanierProduct = [];


    for ( i = 0; i < localStorageProduct.length; i++ ) {
        /* console.log (localStorageProduct.length) */

        structurePanierProduct += ` <hr>
                                        <div class="w3-row w3-center">
                                            <div class="w3-col m3">
                                                <img src = ${localStorageProduct[i].image} style="width:90px;" class="w3-margin w3-round-large">
                                            </div>
                                            <div class="w3-col m3">
                                                <h2 class="w3-xlarge"> ${localStorageProduct[i].nomProduit} </h2>
                                                <p> Objectifs : ${localStorageProduct[i].choiceOption}</p> 
                                            </div>
                                            <div class="w3-col m3">
                                                <p class="w3-margin-top">Prix : ${localStorageProduct[i].price + ' €'}</p>
                                            </div>
                                            <div class="w3-col m3">
                                                <button class="btn-remove-article w3-round-xxlarge w3-button w3-deep-orange w3-margin-top">Suprimer</button>
                                            </div>
                                        </div> 
                                    <hr>`
        ;
    }

    if (i == localStorageProduct.length) {  // inner HTML panier
        tableElt.innerHTML = structurePanierProduct;
    }
}



//~~~~~~~~~~~~~~~~~~~~ START - button Supression article ~~~~~~~~~~~~~~~~~~~~//

// Selection des boutons
let btnRemoveArticle = document.querySelectorAll('.btn-remove-article');

for (let i = 0; i < btnRemoveArticle.length; i++) {
    btnRemoveArticle[i].addEventListener('click', (e) => {

        // Selection ID
        let idRemoveProduct = localStorageProduct[i].idProduit;

        // Suppression de l'élément cjiqué
        localStorageProduct = localStorageProduct.filter (element => element.idProduit !== idRemoveProduct)

        // Mise a jour localStorage
        localStorage.setItem ('basket', JSON.stringify(localStorageProduct));

        // Alerte produit suprimer 
        alert ("prosuit suprimer du panier")
        window.location.reload(true);
    })
}

//~~~~~~~~~~~~~~~~~~~~ END - button Supression article ~~~~~~~~~~~~~~~~~~~~//


clearTheBasket ()
priceTotalBasket ()

//~~~~~~~~~~~~~~~~~~~~ START - button vider panier ~~~~~~~~~~~~~~~~~~~~//
function clearTheBasket () {

    let buttonClearBasket = document.querySelector(".clearTheBasket")

    // Supression key de localStorage
    buttonClearBasket.addEventListener ('click', (e) => {
        localStorage.removeItem('basket');
        alert ("Votre panier est vide")
        window.location.reload(true);
    });
}
//~~~~~~~~~~~~~~~~~~~~ END - button vider panier ~~~~~~~~~~~~~~~~~~~~//




//~~~~~~~~~~~~~~~~~~~~ START - Montant total du panier ~~~~~~~~~~~~~~~~~~~~//
function priceTotalBasket () {

    let priceTotal = [];

    // Regrouper les prix du manier 
    for (let i = 0; i < localStorageProduct.length; i++) {
        let priceProdutInTheBasket = localStorageProduct[i].price;

        // Mettre les prix dans le tableau => 'priceTotal'
        priceTotal.push(priceProdutInTheBasket);
    }

    // Additionner les prix  
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const prixTotal = priceTotal.reduce(reducer,0);

    // Affichage du prix 
    let displayPrice = document.querySelector('.prix-total');
    displayPrice.innerHTML = "Prix total : " + prixTotal + " €"
}


//~~~~~~~~~~~~~~~~~~~~ END - Montant total du panier ~~~~~~~~~~~~~~~~~~~~//




//~~~~~~~~~~~~~~~~~~~~ start - Formulaire ~~~~~~~~~~~~~~~~~~~~//

// Formulaire 
class infoForm {
    constructor () {
        this.lastName = document.querySelector ("#lastname").value;
        this.firstName = document.querySelector ("#firstname").value;
        this.email = document.querySelector ("#email").value;
        this.address = document.querySelector ("#address").value;
        this.city = document.querySelector ("#city").value;
    }

    /* regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test (value);
    }

    emailControl () {
        let email = this.email;
        if(regExEmail(email)) {
            return true;
        }
        else {
            alert ("email non valide")
            return false;
        }
    } */
};

/* regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test (value);
    }

function emailControl () {
    let email = this.email;
    if(regExEmail(email)) {
        return true;
    }
    else {
        alert ("email non valide")
        return false;
    }
} */

// Selection du bouton submit + le event listener 
document.getElementById('submit').addEventListener('click', (e) => {
    /* e.preventDefault(); */

    let formInfo = new infoForm

    // Api validation
    let valid = true;
    
    for (let input of document.querySelectorAll('input[type="text"], input[type="email"]')) {

        valid = valid && input.reportValidity ();
        if (!valid) {
            break;                                                     
        }
    }
    if (valid) {
        sendRequest ();
        // Mettre les formInfo dans le localStorage
        alert ("votre commande à bien été envoyé");
        /* localStorage.setItem ("form", JSON.stringify(formInfo)); */
        
    }
    /* sendRequest (); */
});

//~~~~~~~~~~~~~~~~~~~~ END - Formullaire ~~~~~~~~~~~~~~~~~~~~//




//~~~~~~~~~~~~~~~~~~~~ START - Garder les données du formulaire aprés un reload ~~~~~~~~~~~~~~~~~~~~//

/* // Prendre les informations du locale storage 'form'
const formLocalStorageData = localStorage.getItem ('form');
const formLocalStorageDataObject = JSON.parse (formLocalStorageData);

console.log (formLocalStorageDataObject)

// la fonction 
function putLocalStorageDataInTheForm (input) {
    document.querySelector(`#${input}`).value = formLocalStorageDataObject[input];
};

putLocalStorageDataInTheForm ('lastname');
putLocalStorageDataInTheForm ('firstname');
putLocalStorageDataInTheForm ('email');
putLocalStorageDataInTheForm ('adress');
putLocalStorageDataInTheForm ('city'); */


//~~~~~~~~~~~~~~~~~~~~ END - Garder les données du formulaire aprés un reload ~~~~~~~~~~~~~~~~~~~~//




//~~~~~~~~~~~~~~~~~~~~ POST request ~~~~~~~~~~~~~~~~~~~~// 
/* function postRequest(data) {
    fetch (url + '/' + "order" {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e));
} */



//~~~~~~~~~~~~~~~~~~~~ POO ~~~~~~~~~~~~~~~~~~~~// 


/* // Commande 
class orderInfo {
    constructor (formInformation, idOrder) {
        this.contact = formInformation;
        this.product = idOrder;
    }
}  */

/* function sendRequest () {

    const lastname = document.querySelector ("#lastname").value;
    const firstname = document.querySelector ("#firstname").value;
    const email = document.querySelector ("#email").value;
    const adress = document.querySelector ("#adress").value;
    const city = document.querySelector ("#city").value;

    const formInfo = new infoForm (lastname, firstname, email, adress, city);
    const localStorageProduct = JSON.parse (localStorage.getItem("basket"));

    let idOrder = [];


    for (let i = 0; i < localStorageProduct.length; i = i + 1) {
        localStorageProduct[i].idProduit;
        idOrder.push(localStorageProduct[i].idProduit);
    }
    

    console.log (localStorageProduct) 

    postApiRequest (url + '/' + 'order', variable) // Variable doit représenter les informations du formulaire ainsi que les id
        .then (function (response) {
            localStorage.setItem ("localStorageProduct", JSON.stringify([]));
            localStorage.setItem ("orderConfirmation", response.orderId); 
            window.location.href = "confirm.html"; 
        })
        .catch (function (error) {
            console.log (error);
            if (error === 0) {
                alert ("Nous rencontrons un probléme avec le serveur");
            }
        });
}

console.log (sendRequest ())

console.log (idOrder) */


function sendRequest () {

    // Récupération des ID
    const products = []; 
    for (let i = 0; i < localStorageProduct.length; i = i + 1) {
        localStorageProduct[i].idProduit;
        products.push(localStorageProduct[i].idProduit);
    }
    console.log (products)

    // Récupération données du formulaire
    const contact = JSON.parse (localStorage.getItem("form"));
    
    console.log (contact)

    // Envoi des données
    fetch (url + '/' + 'order', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({contact, products}),
    })
    .then ( async (response) => {
        return await response.json ()
    })
    .then (function (data) {
        console.log(data)
        /* localStorage.setItem ("localStorageProduct", JSON.stringify([]));
        localStorage.setItem ("orderConfirmation", response.orderId);  */
        window.location.href = "../confirm/confirm.html";    
    })
    .catch (function (error) {
        if (error === 0) {
            alert ("Nous rencontrons un probléme avec le serveur");
        }
    });
}

/* console.log (sendRequest ()); */