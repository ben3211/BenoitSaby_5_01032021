function getIdOrder () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);
    const orderIdJs = urlParams.get ('orderId');
    return [orderIdJs];
}
const orderId = getIdOrder ();

console.log (orderId);

displayComfirmPage ()





function displayComfirmPage () {

    const confirmTemplate = document.getElementById('confirmTemplate');

    // items creation        
    let titre = document.createElement('h2');
    let confirmation = document.createElement('p');
    let thanks = document.createElement('p');
    let id = document.createElement('p');


    // Attribute
    titre.setAttribute = ('class', 'w3-center');
    thanks.setAttribute = ('class', 'w3-center w3-padding-top');  
    id.setAttribute = ('class', 'w3-center w3-panel w3-pink');  


    // Inner.html 
    titre.innerHTML = 'Confirmation de votre commande';
    confirmation.innerHTML = 'Votre commande porte le numéro suivant :';
    id.innerHTML = orderId;
    thanks.innerHTML = 'Merci de votre viste !';

    // Order
    confirmTemplate.append(titre, confirmation, id, thanks);



    /* cardContainer.appendChild(cardElement);
    cardElement.append(title, description, price);
    title.appendChild(linkElement);
    linkElement.appendChild(image); */
}