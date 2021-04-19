/** 
 
 * Item.js page
 * Display selected product and lenses selection

**/

/*************************************** Get ID from URL ***************************************/

// ID recovery from URL
function getId () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);
    const product = urlParams.get ('id');
    return product;
}
const id = getId ();
console.log (id)

/********************************** Get API data from ID ********************************/

fetch (url + '/' + id ) 

    .then (function (response) {  
        return response.json();
    }) 

    .then (function (data) { 
        console.log(data)

        // Display function
        displayItemsProductPage (data)   
    }) 

    .catch (function (error) {
        alert ('Nous rencontrons un probléme avec le serveur');
        console.log ('Nous rencontrons un probléme avec le serveur');
    });



/********************************** Displays API data from ID ********************************/

// Item display products function
function displayItemsProductPage (data) {

    let cameras = new Item (data._id, data.name, data.imageUrl, data.description, data.lenses, data.price);
    console.log (cameras.id)

    // Display function from ItemsClass folder
    cameras.displayItem ();

    // Options selection from API
    let choiceOption = data.lenses;

    // Camera options and display.
    for (let i = 0; i < choiceOption.length; i++) {
        lensesElt = document.getElementById('select-option');
        const option = document.createElement ("option");
        option.setAttribute('value',data.lenses[i]);
        option.innerHTML= data.lenses[i];
        lensesElt.appendChild(option);
    }

    // Collect lenses options
    const lensesOption = document.getElementById('select-option');

    // Add to basket function
    AddToBasketButton (lensesOption, data);
};




/************************************** Basket management ************************************/

// Basket initialisation 
function initBasket () {
    let basket = localStorage.getItem ('basket');
    if(basket != null) {                                        
        return JSON.parse(basket);
    }
    else {
        return [];
    }
};

console.log(initBasket()); 


// Add profuct information to the basket
function addToBasket (productInformation) {

    // Get the basket 
    let basket = initBasket ();                                 

    // Add product to basket
    basket.push (productInformation);                           
    
    // Save product
    saveBasket (basket);                                        
    popUp ();                                                   
};

// Save basket data whithin localstorage in JSON chain
function saveBasket (basket) {
    localStorage.setItem('basket',JSON.stringify(basket));         
};


// Pop window inform about add product 
function popUp () {
    alert ("Votre appareil a bien été ajouté au panier");
};


// Add to basket button 
function AddToBasketButton (lensesOption, data) { 
    const btn = document.getElementById("button-add-basket");

    btn.addEventListener("click", (e) => {
        // Lenses option value  
        const choiceOption = lensesOption.value;
        
        // Quantity option value  
        const choiceQuantity = document.querySelector ('#select-quantity').value; 

        // Information object 
        let productInformation = {
            nomProduit: data.name,
            idProduit: id,
            image : data.imageUrl,
            choiceOption: choiceOption,
            quantity: choiceQuantity,
            price: (data.price * choiceQuantity) / 100,
        };            
        console.log (productInformation);

        // add to basket function 
        addToBasket (productInformation);
    });
};


