
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
    const product = urlParams.get ('id')
    return product;
}
console.log (getId());
const id = getId ();


//~~~~~~~~~~~~~~~~~~~~ display product ~~~~~~~~~~~~~~~~~~~~//

function displayProduct (data) {
    const productCard = document.getElementById('product-card');
    for (var i = 0; i < data.length; i++) {

        // items creation  
        let header = document.createElement('header');  
        let title = document.createElement('h2'); 
        let carContainer = document.createElement('div');
        let image = document.createElement('img');
        let description = document.createElement('p');
        let lenses = document.createElement('select');
        let option = document.createElement('option');
        let price = document.createElement('p');
        let button = document.createElement('button');
        let _id = [];

        // Class creation
        header.setAttribute ('class','w3-container w3-light-grey');
        carContainer.setAttribute ('class','w3-container');

        image.setAttribute ('class','w3-left w3-margin-right');
        image.setAttribute ('style','width:100%');

        lenses.setAttribute ('id','select-option');
        lenses.setAttribute ('class','w3-select w3-border');

        button.setAttribute ('id','button-add-basket');
        button.setAttribute ('class','w3-button w3-block w3-dark-grey');

        // Inner.html 
        _id = data[i]._id
        title.innerHTML = data[i].name;
        image.src = data[i].imageUrl;
        description.innerHTML = data[i].description;
        option.innerHTML = "Choisissez votre objectif";
        price.innerHTML = data[i].price + ' €';

        // Order
        productCard.append(header,carContainer,button);
        header.appendChild(title);
        carContainer.append(image,description,lenses,price);
        lenses.appendChild(option);
    }
}

//~~~~~~~~~~~~~~~~~~~~ fetch product ~~~~~~~~~~~~~~~~~~~~//

// Fetch fonction with the selected Id  
fetch ('http://localhost:3000/api/cameras/' + id ) 

    .then (function (response) {  
        return response.json();
    }) 

    .then (function (data) { 
        console.log(data);
        displayProduct (data);
    })

    .catch (function (error) {
        console.log('Nous rencontrons un probléme avec le serveur');
    })

// find Id selected product 

