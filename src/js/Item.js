/** Item.js **/

class Item 
{
	constructor (id, name, imageUrl, description, lenses, price) 
    {
    	this.id = id;
        this.name = name;
        this.image = imageUrl;
    	this.description = description;
    	this.lenses = lenses;
    	this.price = price;
    }

    display () 
    {
    	document.getElementById('title').innerHTML = this.name;
    	document.getElementById('image').src = this.image;
    	document.getElementById('description').innerHTML = this.description;
    	document.getElementById('price').innerHTML = this.price / 100 + ' €';
    }   

	

}

