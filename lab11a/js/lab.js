// Lab 10 - sort or scramble a name
// Author: S Llawom Eydansele <wmodes@csumb.edu>
// Created: February 18, someyear
// License: Public Domain

$("#sect-1").append("<button id='s1-button'>Button</button>");
$("#sect-2").append("<button id='s2-button'>Button</button>");
$("#sect-3").append("<button id='s3-button'>Button</button>");



$("#s1-button").click(function(){
  $(this).parent().toggleClass("special");
});


$("#s2-button").click(function(){
  $(this).parent().toggleClass("special");
});


$("#s3-button").click(function(){
  $(this).parent().toggleClass("special");
});
