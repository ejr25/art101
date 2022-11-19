/*
 * Author: Emma Radihckova <eradichk@ucsc.edu>
 * Created: 13 November 2022
 * License: Public Domain
*/

// TASK #2
// Define the function
function fizzBuzzBoom() {
  // Loop through numbers 1 to 200, listing them as you go
  for (var i=1; i<=200; i++) {
  // If the number is a mutliple of 3, 5, and 7, it should print "FizzBuzzBoom!"
    if (i%105 == 0) {
    	print = "FizzBuzzBoom!"
      // Step 8: Make it so the output of your program appears in your output div: for each number, create a new DOM element and append to your output div
			$("#output").append("<p>" + print + "</p>");
      console.log("i: " + i)
      debugger;
    }
    // If the number is a mutliple of 3 and 5, it should print "FizzBuzz!"
    else if (i%15 == 0) {
      print = "FizzBuzz"
      // Step 8
			$("#output").append("<p>" + print + "</p>");
    }
  // If the number is a mutliple of 3 and 7, it should print "FizzBoom!"
    else if (i%21 == 0) {
      print = "FizzBoom!"
      // Step 8
			$("#output").append("<p>" + print + "</p>");
    }
  // If the number is a mutliple of 5 and 7, it should print "BuzzBoom!"
    else if (i%35 == 0) {
    	print = "BuzzBoom!"
      // Step 8
			$("#output").append("<p>" + print + "</p>");
    }
    // If the number is a multiple of 3, it should print "Fizz!"
    else if (i%3 == 0) {
      print = "Fizz"
      // Step 8
			$("#output").append("<p>" + print + "</p>");
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    else if (i%5 == 0) {
      print = "Buzz!"
      // Step 8
			$("#output").append("<p>" + print + "</p>");
    }
    // If the number is a multiple of 7, it should print "Boom!"
    else if (i%7 == 0) {
      print = "Boom!"
      // Step 8
			$("#output").append("<p>" + print + "</p>");
    }
  // If none of the above conditons apply, just print the number
    else {
    	// Step 8
			$("#output").append("<p>" + i + "</p>");    }
  } // Loop close bracket
} // Function close bracket

fizzBuzzBoom()
