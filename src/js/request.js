
const url = 'http://localhost:3000/api/cameras'

/////////////// recevoir les données de l'API //////////////////
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


//-------------- data from JSON -----------------

/* var request = new XMLHttpRequest()

request.open('GET','http://localhost:3000/api/cameras')

request.onload = function () {
  // begin accessing JSON data here
  var data = JSON.parse(this.response)

  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
  }
}

request.send() */

//-------------------------------


// envoyer des données //
