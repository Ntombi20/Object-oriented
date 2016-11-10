//creating an constructor function
function Contact(name, email) {

  this.name = name;
  this.email = email;

}

var contact = new Contact("Ntombi", "ntombi@projectcodex.co");
var contact2 = new Contact("Beauty", "beauty@projectcodex.co");

///
//using prototype
function Monster(name) {
  this.name = name;
  this.health = 100;
}

Monster.prototype.takeDamage = function (){
  this.health--;
}

///
