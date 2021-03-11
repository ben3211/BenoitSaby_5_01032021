
//~~~~~~~~~~~~~~~~~~~~ Add items HTML page ~~~~~~~~~~~~~~~~~~~~//
function displayItems (data) {

    const indexCard = document.getElementById('index-card');
    for (var i = 0; i < data.length; i++) {

        // items creation        
        let linkElement = document.createElement('a');
        let cardContainer = document.createElement('div');
        let cardElement = document.createElement('div');
        let title = document.createElement('h3'); 
        let image = document.createElement('img'); 
        let description = document.createElement('p');
        let lenses = document.createElement('p');
        let price = document.createElement('p');
        let _id = [];

        // link properties  
        linkElement.className = 'link';
        linkElement.setAttribute('href','src/views/product.html?id=' + data[i]._id);  //add destination

        // Class creation
        cardContainer.className = 'card-container';
        cardContainer.setAttribute ('class', 'w3-third');  //add w3css class

        cardElement.className = 'card-element';
        cardElement.setAttribute ('class', 'w3-card-4 w3-center');  //add w3css class

        title.className = 'title';

        description.className = 'description';
        lenses.className = 'lenses';
        price.className = 'price';

        // Inner.html 
        _id = data[i]._id
        title.innerHTML = data[i].name;
        image.src = data[i].imageUrl;
        description.innerHTML = data[i].description;
        lenses.innerHTML = data[i].lenses;
        price.innerHTML = data[i].price + ' €';

        // Order
        indexCard.appendChild(cardContainer);
        cardContainer.appendChild(cardElement);
        cardElement.append(title, description, lenses, price);
        title.appendChild(linkElement)
        linkElement.appendChild(image);
    }
}


//~~~~~~~~~~~~~~~~~~~~ Catch id for the product page, without "?"  ~~~~~~~~~~~~~~~~~~~~//

