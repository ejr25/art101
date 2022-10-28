/*
 * Author: Emma Radihckova <eradichk@ucsc.edu>
 * Created: 26 October 2022
 * License: Public Domain
*/

// Create an array of numbers
var numberArray = [1, 2, 3, 4, 5];

// Create a function that takes a parameter and preforms a calculation on it
function subtractFive(n) {
  return n - 5
};


// Testing the subtractFive function
console.log("5 - 5 = ", subtractFive(5));
console.log("67 - 5 = ", subtractFive(67));
console.log("(- 19) - 5 = ", subtractFive(-19));

// Use map on numberArray as a callback to operate on all the numbers inside
var result1 = numberArray.map(subtractFive);
console.log("Each number in numberArray minus 5 is: ", result1);

// Create a new anonymous function as a callback with map to do a new operation on the numbers in numberArray
var result2 = numberArray.map(function(n){
  return n * 10;
});
console.log("Each number in numberArray times 10 is: ", result2);


// DISPLAYING RESULTS IN DOCUMENT
// Step 1: Defining an output statement
var output = "Each number in numberArray minus 5 is:  " + result1 + "<br>" + "Each number in numberArray times 10 is:  " + result2;

// Step 2: Displaying output on HTML
var outputEl = document.getElementById("output");
outputEl.innerHTML = output;
