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
    let price = document.createElement('span')
    let confirmation = document.createElement('p');
    let thanks = document.createElement('p');
    let id = document.createElement('p');


    // Attribute
    id.setAttribute ('class', 'w3-text-lime');  
    thanks.setAttribute ('class', 'w3-margin w3-padding');  

    // Inner.html 
    price.innerHTML = 'Le prix total est de : ' + totalPriceComfirmationPage + ' €';
    confirmation.innerHTML = 'Votre commande porte le numéro suivant :';
    id.innerHTML = orderId;
    thanks.innerHTML = 'Merci pour votre confiance !';

    // Order
    confirmTemplate.append( price, confirmation, id, thanks);
}




/***********************************  Function declaration  ********************************/

displayComfirmPage ()