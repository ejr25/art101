/*
 * Author: Emma Radihckova <eradichk@ucsc.edu>
 * Created: 3 November 2022
 * License: Public Domain
*/

// TASK #2
// Finding the Challenge element
$("#sect-1");
// Add button
$("#sect-1").append("<button id='button-sect-1'>Press me");

// Finding the Problems element
$("#sect-2");
// Add button
$("#sect-2").append("<button id='button-sect-2'>Press me");

// Finding the Results element
$("#sect-3");
// Add button
$("#sect-3").append("<button id='button-sect-3'>Press me");


// TASK #3
$("button-sect-1").click(function() {
  $("#sect-1").toggleClass("special");
});

/*
$("button-sect-2").click(function() {
  $("#sect-2").toggleClass("special");
});

$("button-sect-3").click(function() {
  $("#sect-3").toggleClass("special");
});
*/
