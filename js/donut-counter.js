//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user a message telling them the numbers of donuts and guests and if there are enough or not.

var guests = prompt("Enter number of donuts");
var donuts = prompt("Enter number of guests");

console.log("donuts: " + donuts + ", guests: " + guests);
if (donuts < guests) {
  console.log("There are not enough donuts!!");
}
else {
  console.log("Everyone has donuts!! ");
}
