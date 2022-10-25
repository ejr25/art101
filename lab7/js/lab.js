/*
 * Author: Emma Radihckova <eradichk@ucsc.edu>
 * Created: 18 October 2022
 * License: Public Domain
*/


// Declaring function nameSorter(name)
// The user inputs their name and then the function sorts it
function nameSorter() {
  // Step 1: Ask user to input their name and store it in a variable
  var userName = window.prompt("Enter name here for sorting.");
  console.log("user's first input= ", userName);

  // Step 2: Turns userName into an array so we can sort it in Step 3
  var userNameArray = userName.split("");

  // Step 3: Takes the array version of the user's name and sorts it
  var userNameArraySorted = userNameArray.sort();

  // Step 4: Combines the newly sorted name back into a string and prints it
  var userNameSorted = userNameArraySorted.join("");
  console.log(userNameSorted);

  // Returns the final sorted name as a string
  return userNameSorted
};


// Runs the function
document.writeln("Here is your sorted name: ", nameSorter(), "</br");


/*
// TASK X #5: window.prompt() happens outside of function, and passes the name as a parameter of the function to return result

// Step 1: User input name outside of function
var userInput = window.prompt("Enter name here for sorting.");

// Step 2: Declaring function nameSorter2
function nameSorter2(name) {
  // Step 3: Turns parameter "name" into an array so we can sort it in Step 3
  var userNameArray2 = name.split("");

  // Step 4: Takes the array version of the "name" parameter and sorts it
  var userNameArraySorted2 = userNameArray2.sort();

  // Step 5: Combines the newly sorted name back into a string and prints it
  var userNameSorted2 = userNameArraySorted2.join("");
  console.log(userNameSorted2);

  // Returns the final sorted name as a string
  return userNameSorted2
};



// Runs the function
document.writeln("Here is your sorted name: ", nameSorter2(userInput), "</br");
*/
