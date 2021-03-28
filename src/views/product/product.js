//récupération id deuxiéme méthode 
function getId () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams (queryString);
    const product = urlParams.get ('id');
    return product;
}
const id = getId ();


/**main page**/ 
/**initialisation**/

fetch (url + '/' + id ) 

    .then (function (response) {  
        return response.json();
    }) 

    .then (function (data) { 
        console.log(data)
        let cameras = new Item (data._id, data.name, data.imageUrl, data.description, data.lenses, data.price);
        cameras.display ();

        // Récuperer les choix des options de chaque apparails à partir de l'api 
        // Selection des options dans l'api
        let choiceOption = data.lenses;
        // Selectionner le nombre d'option en fonction de l'appareil et les affichés 
        for (let i = 0; i < choiceOption.length; i++) {
            lensesElt = document.getElementById('select-option');
            const option = document.createElement ("option");
            option.setAttribute('value',data.lenses[i]);
            option.innerHTML= data.lenses[i];
            lensesElt.appendChild(option);
        }
            

        // Récuration lenses options
        const lensesOption = document.getElementById('select-option');

        //~~~~~~~~~~~~~~~~~~~~ Bouton ajouter au panier ~~~~~~~~~~~~~~~~~~~~//

        // Selection du bouton pour envoyer au panier 
        const btn = document.getElementById("button-add-basket");

        // envoyer au panier
        btn.addEventListener("click", (e) => {
        
            // Le choix de l'utilisateur  
            const choiceOption = lensesOption.value;
        
            // récupération des informations 
            let productInformation = {
                nomProduit: data.name,
                idProduit: id,
                image : data.imageUrl,
                choiceOption: choiceOption,
                quantity: 1,
                price: data.price / 100,
            };            
            console.log (productInformation);


            addToBasket (productInformation);

            /* //~~~~~~~~~~~~~~~~~~~~ Local storage ~~~~~~~~~~~~~~~~~~~~//

            // Récupération des valeurs 

            // Variable key/value du local storage
            let localStorageProduct = JSON.parse (localStorage.getItem("product"));         // Convertir les données JSON du localStorage en JS 

                // Function popup
                const popupAddProduct = () => {
                    window.confirm("Votre produit a bien été ajouté au panier");
                }

                // Ajout produit au localStorage
                const addToBasket = () => {
                    localStorageProduct.push(productInformation);                           // Ajout des informations selectionnées 
                    localStorage.setItem ("product", JSON.stringify(localStorageProduct));  // Transformation en JSON et envoie au localStorage 
                };
                
                // Si il y a déja un produit dans le locals storage... ou alors... pour ne pas l'écraser
            if (localStorageProduct) {
                addToBasket ();
                popupAddProduct();
            }
            else {
                localStorageProduct = [];                                                   // creer tableau s'il n'y à pas de produit 
                addToBasket ();
                popupAddProduct();
            }
            console.log(localStorageProduct); */

        });

        

    }) 

    .catch (function (error) {
        console.log('Nous rencontrons un probléme avec le serveur');
    });


    


//~~~~~~~~~~~~~~~~~~~~ AVEC DES FONCTIONS  ~~~~~~~~~~~~~~~~~~~~//

function initBasket () {
    var basket = localStorage.getItem ('basket');
    if(basket != null) {                                        // S'il n'est pas vide 
        return JSON.parse(basket);
    }
    else {
        return [];
    }
};

console.log(initBasket()); 

function addToBasket (productInformation) {
    var basket = initBasket ();                                 // On récupére le panier 
    basket.push (productInformation);                           // Ajout d'un prosuit 
    
    /* var product = basket.find (product => product.id == id); // Gerer la quantitée, trouver le produit avec l'id identique
    if (product) {
        product.quantity++;                                     // Si le produit existe => ajouter 1
    }
    else {
        addToBasket (product);                                  // Sinon creer un nouveau produit 
    }*/

    saveBasket (basket);                                        // Enregistrer
    popUp ();                                                   
};

function removeFromBasket () {

};

function saveBasket (basket) {
    localStorage.setItem('basket',JSON.stringify(basket));      // Fonction enregistrer    
};

function popUp () {
    alert ("Votre produit a bien été ajouté au panier");
};