/** 
 
 * Confirm.js page
 * Recovery and display orderId
 
**/

/**************************  Get the orderId contain in the url ***************************/

function getIdOrder () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);
    const orderIdJs = urlParams.get ('orderId');
    return [orderIdJs];
}

const orderId = getIdOrder ();




/***********************************  Get the total price *********************************/

let totalPriceComfirmationPage = JSON.parse (localStorage.getItem("totalPrice"));  
console.log (totalPriceComfirmationPage)




/************************************  Display function  **********************************/

function displayComfirmPage () {

    const confirmTemplate = document.getElementById('confirmTemplate');

    // items creation        
    let titre = document.createElement('h2');
    let price = document.createElement('span')
    let confirmation = document.createElement('p');
    let thanks = document.createElement('p');
    let id = document.createElement('p');


    // Attribute
    id.setAttribute ('class', 'w3-text-aqua');  
    thanks.setAttribute ('class', 'w3-margin w3-padding');  

    // Inner.html 
    titre.innerHTML = 'Confirmation de votre commande';
    price.innerHTML = 'Le prix total est de : ' + totalPriceComfirmationPage + ' €'
    confirmation.innerHTML = 'Votre commande porte le numéro suivant :';
    id.innerHTML = orderId;
    thanks.innerHTML = 'Merci de votre viste !';

    // Order
    confirmTemplate.append(titre, price, confirmation, id, thanks);
}




/***********************************  Function declaration  ********************************/

displayComfirmPage ()