/*
 * Author: Emma Radihckova eradichk@ucsc.edu
 * Created: 18 October 2022
 * License: Public Domain
*/

console.log("HI");



// Declaring Variables
var test = "hi";

var myTransport = ["Santa Cruz Metro", "Campus Loop", "Walking"];

var myMainRide = {
    make: "Honda",
    model: "Accord",
    color: "Red",
    year: 2007,
    ownIt: true,
};


// Output
document.writeln("Test: " + test + "<br>");
document.writeln("My forms of transportation: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
