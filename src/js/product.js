
//récupération id premiere méthode 
/* function getId () {
    const param = window.location.search;
    const id = param.replace ("?id=","");
    console.log (window.location.search)
    return id;
};
const id = getId (); */

//récupération id deuxiéme méthode 
function getId () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);
    const product = urlParams.get ('id');
    return product;
}
const id = getId ();


//~~~~~~~~~~~~~~~~~~~~ display product ~~~~~~~~~~~~~~~~~~~~//

function displayProduct (data) {
    const productCard = document.querySelector('#product-card');

    // items creation  
    let header = document.createElement('header');  
    let title = document.createElement('h2'); 
    let carContainer = document.createElement('div');
    let image = document.createElement('img');
    let description = document.createElement('p');
    let lensesElt = document.createElement('select');
    let optionPlaceholder = document.createElement('option');
    let price = document.createElement('p');
    let button = document.createElement('button');
    let _id = [];

    // Class creation
    header.setAttribute ('class','w3-container w3-light-grey');

    carContainer.setAttribute ('class','w3-container');

    image.setAttribute ('class','w3-left w3-margin-right');
    image.setAttribute ('style','width:100%');

    lensesElt.setAttribute ('id','select-option');
    lensesElt.setAttribute ('class','w3-select w3-border');

    button.setAttribute ('id','button-add-basket');
    button.setAttribute ('class','w3-button w3-block w3-dark-grey');

    // Inner.html 
    _id = data._id
    title.innerHTML = data.name;
    image.src = data.imageUrl;
    description.innerHTML = data.description;
    optionPlaceholder.innerHTML = "Choisissez votre objectif";
    price.innerHTML = data.price / 100 + ' €';
    button.innerHTML = "Ajouter au panier"

    // Order
    productCard.append(header,carContainer,button);
    header.appendChild(title);
    carContainer.append(image,description,lensesElt,price);
    lensesElt.appendChild(optionPlaceholder);

    // Récuperer les choix des options de chaque apparails à partir de l'api 
        // Selection des options dans l'api
        let choiceOption = data.lenses;
        // Selectionner le nombre d'option en fonction de l'appareil et les affichés 
    for (let i = 0; i < choiceOption.length; i++) {
        const option = document.createElement ("option");
        option.setAttribute('value',data.lenses[i]);
        option.innerHTML= data.lenses[i];
        lensesElt.appendChild(option);
    }

    // Récuration lenses options
    const lensesOption = document.getElementById('select-option');
    console.log(lensesOption)

    //~~~~~~~~~~~~~~~~~~~~ Bouton ajouter au panier ~~~~~~~~~~~~~~~~~~~~//

    // Selection du bouton pour envoyer au panier 
    const btn = document.getElementById("button-add-basket");
    console.log(btn);

    // envoyer au panier
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    
        // Le choix de l'utilisateur  
        const choiceOption = lensesOption.value;
    
        // récupération des informations 
        let productInformation = {
            nomProduit: data.name,
            idProduit: id,
            choiceOption: choiceOption,
            quantity: 1,
            prix: data.price / 100,
        };
    
    console.log(productInformation); 
    
    });

}
//~~~~~~~~~~~~~~~~~~~~ fetch product ~~~~~~~~~~~~~~~~~~~~//

// Fetch fonction with the selected Id  
fetch (url + '/' + id ) 

    .then (function (response) {  
        return response.json();
    }) 

    .then (function (data) { 
        console.log(data);
        displayProduct (data);
    })

    .catch (function (error) {
        console.log('Nous rencontrons un probléme avec le serveur');
    });



//~~~~~~~~~~~~~~~~~~~~ gestion du panier ~~~~~~~~~~~~~~~~~~~~//



