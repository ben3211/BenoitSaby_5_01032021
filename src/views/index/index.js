
/////////////// recevoir les données de l'API //////////////////
fetch (url)
    .then (function (response) {  
        return response.json(); 
    }) 
    .then (function (data) { 
        displayItems (data);
    })
    .catch (function (error) {
        console.log('Nous rencontrons un probléme avec le serveur');
    })

