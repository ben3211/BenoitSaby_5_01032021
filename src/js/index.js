/** 
 
 * index.js page
 * Display item from API and selection
 
**/



main ();



/************************************* Get API data  ************************************/

async function main () {
    const cameras = await getCameras ()
    console.log (cameras)
    displayItemsIndexPage (cameras);
}



/*********************************** Display API data  *********************************/

// Index display items function
function displayItemsIndexPage (data) {

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
        linkElement.setAttribute('href','src/views/product/product.html?id=' + data[i]._id); 

        // Class creation
        cardContainer.setAttribute ('class', 'w3-third w3-hover-opacity'); 

        cardElement.setAttribute ('class', 'w3-card-4 w3-center w3-padding w3-margin w3-light-gray');  
    
        price.className = 'price';
        price.setAttribute ('class', 'w3-text-sand w3-button w3-round w3-green'); 

        // Inner.html 
        _id = data[i]._id;
        title.innerHTML = data[i].name;
        image.src = data[i].imageUrl;
        description.innerHTML = data[i].description;
        price.innerHTML = data[i].price / 100 + ' €';

        // Order
        indexCard.appendChild(cardContainer);
        cardContainer.appendChild(cardElement);
        cardElement.appendChild(linkElement);
        linkElement.append(title, image, description, price);
    }
}