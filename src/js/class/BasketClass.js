/** 

 * basket class.js page
 * Class creation

**/

// Basket
class Basket {
    Constructor (idProduit, nomProduit, image, price, choiceOption) {
        this.id = idProduit;
        this.name = nomProduit;
        this.image = image;
        this.price = price;
        this.lenses = choiceOption;
    }
}



// Formulaire 
class infoForm {
    constructor () {
        this.lastName = document.querySelector ("#lastname").value;
        this.firstName = document.querySelector ("#firstname").value;
        this.email = document.querySelector ("#email").value;
        this.address = document.querySelector ("#address").value;
        this.city = document.querySelector ("#city").value;
    }

    /* regExEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test (value);
    }

    emailControl () {
        let email = this.email;
        if(regExEmail(email)) {
            return true;
        }
        else {
            alert ("email non valide")
            return false;
        }
    } */
};