// Lab 15: AJAX
//Author: Emma Radihckova <eradichk@ucsc.edu>
// Created: 21 November 2022
// License: Public Domain



var endpoint = "https://eightballapi.com/api";

// Defines function that
function getAPIData() {
	console.log("Running getAPIData");
  // go to numbers.api for data using AJAX
  $.ajax({
      // API endpoint
      url: endpoint,
      // GET request
      type: "GET",
      // data type we expect back
      dataType: "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      var fortune = data.reading
      $("#output").text(fortune);


  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
  });
}

$("#activate").click(getAPIData);






/*
// Defines function that does all API Work
function getAPIData() {

// Go to our selcted API: yesno
  $.ajax({
      // API endpoint
      url: "https://yesno.wtf/#api",
      // Any data to send
      data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      //dataType : "json",
  })



  // Place our slected data into our output div
  .done(function(data) {
      console.log("Success:", data);
      $("#output").text(data)
  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
  });
}

// Add a click event to button
$("#activate").click(getAPIData);
*/
