var boxWah = document.body.querySelector(".box");

var userInputOne = prompt("Input the first number.")
var userInputTwo = prompt("Input the second number.")

var userTotal = +userInputOne + +userInputTwo;

boxWah.innerHTML=userTotal;