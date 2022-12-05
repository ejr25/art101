// Lab 16: JSON and APIs
//Author: Emma Radihckova <eradichk@ucsc.edu>
// Created: 26 November 2022
// License: Public Domain

// Use $.ajax() recipe to retrieve data
$.ajax({
    url: "https://xkcd.com/156/info.0.json",

    type: "GET", // Whether this is a POST or GET request

    dataType : "json", // The type of data we expect back

    // What do we do when the api call is successful
    success: function(data) {
        comicObj = data; // Store data object in a variable comicObj
        comicTitle = comicObj.title; // Give the section a title using the comicObj.title key from the object
        comicImg = comicObj.img; // Create an image tag using the comicObj.img key from the object
        comicAlt = comicObj.alt; // Give the image an alt and title attributes using the comicObj.alt key from the object
        console.log(comicObj);
        console.log(comicTitle);
        console.log(comicImg);
        console.log(comicAlt);

        // Within the success callback function, process the parts and add them to your webpage with the appropriate tags
        $("#output").html("<h4>" + comicTitle + "</h4>");
        $("#output").append("<img src=" + comicImg + ">");
        $("#output").append("<p>" + comicAlt + "</p>");
    },

    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
})
