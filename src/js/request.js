
const url = 'http://localhost:3000/api/cameras'

/////////////// Recevoir les données de l'API //////////////////
function getApiData() { 
  fetch(url)  //si réponse, exécution fontion then avec response comme paramétre
      .then(function (response) {  //exécution de la fonction json pour obtenir les données
          return response.json();  //retourne une promesse en json
      }) 
      .then(function (data) {  
      })
      .catch(function (err) {
          console.log('Nous rencontrons un probléme avec le serveur');
      })
};




/////////////// Envoyer les données à l'API //////////////////
/* function postApiRequest (url, jsonBody) {
  const promise = new Promise (function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.open ("POST", url);
    request.setRequestHeader("content-Type", "application/json");
      if (this.readyState === 4) {
        if (this.status === 201) {
          resolve (JSON.parse(this.responseText));
        } else {
          reject (request.status);
        }
      };
      request.send (JSON.stringify(jsonBody));
  });
  return promise;
} */
