/** 

 * Request class.js page
 * API url

**/



const url = 'http://localhost:3000/api/cameras'

/*********************************** Get API data  *********************************/

function getCameras () {
  return fetch (url)
      .then (function(response) {
          return response.json ()
      })
      .then (function (cameras) {
          // console.log (cameras) 
          return cameras
      })
      .catch (function (error) {
          alert ('Nous rencontrons un probléme avec le serveur');
          console.log('Nous rencontrons un probléme avec le serveur');
      })
}



/*********************************** send API data  *********************************/

/* function sendData () {
  return fetch (url + '/' + 'order', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json',
    },
    body : JSON.stringify({contact, products}),
    })
    .then ( async (response) => {
        return await response.json ()
    })
    .then (function (data) {
        console.log(data)
        //window.location.href = "../confirm/confirm.html?orderId=" + data.orderId ;    
        // localStorage.setItem ("localStorageProduct", JSON.stringify([]));
        // localStorage.setItem ("orderConfirmation", response.orderId); 
    })
    .catch (function (error) {
        if (error === 0) {
            alert ("Nous rencontrons un probléme avec le serveur");
            console.log ('Nous rencontrons un probléme avec le serveur');
        }
    });
} */