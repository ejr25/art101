// Lab 11: Libraries & jQuery
//Author: Emma Radihckova <eradichk@ucsc.edu>
// Created: 3 November 2022
//License: Public Domain


// TASK 2: Create buttons to add to the Challenge, Problems, and Results sections of site
// Find the section you want to add the button to, create the button, give it a text label, add it to the section X3
// Button that changes font color
$("#sect-1").before("<button id='font-button'>Text Color</button>");

// Section button that changes each section
$("#sect-1").append("<button id='s1-button'>Button 1</button>");
$("#sect-2").append("<button id='s2-button'>Button 2</button>");
$("#sect-3").append("<button id='s3-button'>Button 3</button>");

// Task X Button that changes the color of other buttons
$("#sect-1").append("<button id='change-b1-color'>???</button>");


// TASK 3: Add a jQuery click event listener for each button
// Find section of each button, toggle class "special" within the <div> of the section, style each class in css, test
// Font Button
$("#font-button").click(function(){
  $(".sect-text").toggleClass("special2");
});

// Challenge Button
$("#s1-button").click(function(){
  $(this).parent().toggleClass("special");
});

// Problems Button
$("#s2-button").click(function(){
  $(this).parent().toggleClass("special");
});

// Results Button
$("#s3-button").click(function(){
  $(this).parent().toggleClass("special");
});

// TASK X Button
$("#change-b1-color").click(function(){
  $("#s1-button").toggleClass("special3");
  $("#s2-button").toggleClass("special3");
  $("#s3-button").toggleClass("special3");
});
