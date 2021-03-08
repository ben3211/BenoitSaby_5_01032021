/////////// création card ///////////

/* // item creation

let linkElement = document.createElement('a');
let cardContainer = document.createElement('div');
let cardElement = document.createElement('div');
let title = document.createElement('h3'); 
let image = document.createElement('img'); 
let description = document.createElement('p');
let lenses = document.createElement('p');
let price = document.createElement('p');

// class creation
linkElement.className = 'link';
cardContainer.className = 'card-container';
cardContainer.setAttribute('class', 'w3-third')  // add w3css class
cardElement.className = 'card-element';
cardElement.setAttribute('class', 'w3-card-4 w3-center')  // add w3css class
title.className = 'title';
image.className = 'image';
description.className = 'description';
lenses.className = 'lenses';
price.className = 'price';

// Image source 
image.src = '';

// attribute
linkElement.setAttribute('href','product.html')

//inner.html 
title.innerHTML = data[i].name;
description.innerHTML = data[i].description;
price.innerHTML = data[i].price; 

//order
card.appendChild(linkElement);
linkElement.append(cardContainer, cardElement);
cardElement.append(title, image, description, lenses, price); */


/////////////// recevoir les données de l'API //////////////////
fetch (url)
    .then(function (response) {  
        return response.json(); 
    }) 
    .then(function (data) {  
        console.log(data);
        const card = document.getElementById('card');
        console.log(card)
        for (var i = 0; i < data.length; i++) {

// item creation        
let linkElement = document.createElement('a');
let cardContainer = document.createElement('div');
let cardElement = document.createElement('div');
let title = document.createElement('h3'); 
let image = document.createElement('img'); 
let description = document.createElement('p');
let lenses = document.createElement('p');
let price = document.createElement('p');

// class creation
linkElement.className = 'link';
linkElement.setAttribute('href','product.html')  //add destination

cardContainer.className = 'card-container';
cardContainer.setAttribute ('class', 'w3-third');  //add w3css class

cardElement.className = 'card-element';
cardElement.setAttribute ('class', 'w3-card-4 w3-center');  //add w3css class

title.className = 'title';

description.className = 'description';
lenses.className = 'lenses';
price.className = 'price';

//inner.html 
title.innerHTML = data[i].name;
image.src = data[i].imageUrl;
description.innerHTML = data[i].description;
lenses.innerHTML = data[i].lenses;
price.innerHTML = data[i].price;

//order
card.appendChild(cardContainer);
cardContainer.appendChild(cardElement);
cardElement.append(title, description, lenses, price);
title.appendChild(linkElement)
linkElement.appendChild(image);


        } 
    })
    .catch(function (err) {
        console.log('Nous rencontrons un probléme avec le serveur');
    })



// afficher résultat dans le html 
/* function addData(data) { 
    let card = document.querySelector(".card");  // Selection de l'élément pour afficher les données
    for (var i = 0; i < data.length; i++) {  //loop pour récupérer tous les éléments 
        const div = document.createElement("div");  
        div.innerHTML = data[i].name;
        div.setAttribute('class','')
        card.appendChild(div);
    }
}; */

//création de nouveaux élément pour les cards

