/** 
 
 * Basket.js page
 * Basket and form creation / management data

**/




 /************************************** START - Basket management ************************************/

// Convert basket localStorage data in javascript
let localStorageProduct = JSON.parse (localStorage.getItem("basket"));  // Convertir les données JSON du localStorage en JS 
console.log (localStorageProduct)


// If the basket iempty ? 
function yourBasketIsEmpty() {
    const empty = document.getElementById('empty-basket');
    let emptyBasket = document.createElement ('h3');
    emptyBasket.innerHTML = "Votre panier est vide !";
    empty.appendChild(emptyBasket);
};


// Clear basket button
function clearTheBasket () {

    let buttonClearBasket = document.querySelector(".clearTheBasket")

    // Supression localStorage key 
    buttonClearBasket.addEventListener ('click', (e) => {
        localStorage.removeItem('basket');
        alert ("Votre panier est vide")
        window.location.reload(true);
    });
};


// Article delete button
function basketDeleteItemButton () {
    let btn = document.querySelectorAll ('.btn-remove-article');
    console.log (btn)

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id')
            console.log (id)
            localStorageProduct.splice (i, 1);

            /* for (let i = 0; i != localStorageProduct.length; i++) {
                if (localStorageProduct[i].id === id ) {
                    localStorageProduct.splice (i, 1);
                    console.log (localStorageProduct);
                    break;
                }
            } */
            // Mise a jour localStorage
            localStorage.setItem ('basket', JSON.stringify(localStorageProduct));

            // Alerte produit suprimer 
            alert ("prosuit suprimer du panier")
            window.location.reload(true);
        });
    };


        /* for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', (e) => {

            // Selection ID
            let btn = localStorageProduct[i].idProduit;
            console.log (btn)

            // Suppression de l'élément cliqué
            localStorageProduct = localStorageProduct.filter (element => element.idProduit !== btn)
            console.log (localStorageProduct)

            // Mise a jour localStorage
            localStorage.setItem ('basket', JSON.stringify(localStorageProduct));

            // Alerte produit suprimer 
            alert ("prosuit suprimer du panier")
            window.location.reload(true);
        })
    } */
}

// Total price function
function priceTotalBasket () {

    let addPrice = [];

    // Get all the products prices
    if (localStorageProduct == null) {
        console.log ('Le localStorage est vide')
    } else {
        for (let i = 0; i < localStorageProduct.length; i++) {
            let priceProductInTheBasket = localStorageProduct[i].price;
    
            // Mettre les prix dans le tableau => 'addPrice'
            addPrice.push(priceProductInTheBasket);
        }
    } 
    
    // Add up basket prices
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalPrice = addPrice.reduce(reducer,0);

    // Displays total price 
    let displayPrice = document.querySelector('.prix-total');
    displayPrice.innerHTML = "Prix total : " + totalPrice + " €"

    // Add to localStorage
    localStorage.setItem ('totalPrice', JSON.stringify(totalPrice));
}

/************************************** END - Basket management ************************************/




/********************************** START - Display basket products ********************************/

// Element selection to display  
const tableElt = document.getElementById('table');

// Table is it empty ? 
if (localStorageProduct === null || localStorageProduct == 0) { 
    yourBasketIsEmpty();

    // Don't show the form
    document.getElementById ('form').style.display = "none"

    // Don't show the clear basket button
    document.querySelector(".clearTheBasket").style.display = "none"
}

else {  // If not => display products
    
    // Show the clear button and the total price
    clearTheBasket ()
    priceTotalBasket () 

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
                                                <p class="w3-margin-top">Quantité : ${localStorageProduct[i].quantity}</p>
                                            </div>
                                            <div class="w3-col m3">
                                                <button class="btn-remove-article w3-round-xxlarge w3-button w3-deep-orange w3-margin-top" data-id = ${localStorageProduct[i].idProduit}>Suprimer</button>
                                            </div>
                                        </div> 
                                    <hr>`
        ;
    }

    if (i == localStorageProduct.length) {  
        tableElt.innerHTML = structurePanierProduct;
    }
};

// Function button delete declaration
basketDeleteItemButton ();

/************************************** END - Display basket products ************************************/




/****************************************** START - Form managemnt ***************************************/

// 'click' listener and API validation
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
        localStorage.setItem ("form", JSON.stringify(formInfo));                                 
        sendRequest ();
        alert ("votre commande à bien été envoyé");
        
    }
});

/****************************************** END - Form managemnt ***************************************/



/****************************************** START - POST request ***************************************/

function getDataPostRequest () {
    // Get the product ID 
    const products = []; 
    for (let i = 0; i < localStorageProduct.length; i = i + 1) {
        localStorageProduct[i].idProduit;
        products.push(localStorageProduct[i].idProduit);
    }
    console.log (products)

    // Get the form data
    const contact = JSON.parse (localStorage.getItem("form"));
    console.log (contact)
}




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
        window.location.href = "../confirm/confirm.html?orderId=" + data.orderId;    
        // localStorage.setItem ("localStorageProduct", JSON.stringify([]));
        // localStorage.setItem ("orderConfirmation", response.orderId);  
    })
    .catch (function (error) {
        if (error === 0) {
            alert ("Nous rencontrons un probléme avec le serveur");
            console.log ('Nous rencontrons un probléme avec le serveur');
        }
    });
};

/****************************************** END - POST request *****************************************/





