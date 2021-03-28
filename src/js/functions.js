
//~~~~~~~~~~~~~~~~~~~~ Add items HTML page ~~~~~~~~~~~~~~~~~~~~//
function displayItems (data) {

    const indexCard = document.getElementById('index-card');
    for (let i = 0; i < data.length; i++) {

        // items creation        
        let linkElement = document.createElement('a');
        let cardContainer = document.createElement('div');
        let cardElement = document.createElement('div');
        let title = document.createElement('h3'); 
        let image = document.createElement('img'); 
        let description = document.createElement('p');

        let price = document.createElement('p');
        let _id = [];

        // link properties  
        linkElement.className = 'link';
        linkElement.setAttribute('href','src/views/product/item.html?id=' + data[i]._id);  //add destination

        // Class creation
        cardContainer.className = 'card-container'; 
        cardContainer.setAttribute ('class', 'w3-third');  //add w3css class

        cardElement.className = 'card-element';
        cardElement.setAttribute ('class', 'w3-card-4 w3-center w3-padding w3-margin');  //add w3css class

        title.className = 'title';

        description.className = 'description';
        price.className = 'price';

        // Inner.html 
        _id = data[i]._id;
        title.innerHTML = data[i].name;
        image.src = data[i].imageUrl;
        description.innerHTML = data[i].description;
        price.innerHTML = data[i].price / 100 + ' €';

        // Order
        indexCard.appendChild(cardContainer);
        cardContainer.appendChild(cardElement);
        cardElement.append(title, description, price);
        title.appendChild(linkElement);
        linkElement.appendChild(image);
    }
}

