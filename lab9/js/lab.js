/*
 * Author: Emma Radihckova <eradichk@ucsc.edu>
 * Created: 27 October 2022
 * License: Public Domain
*/


// Step 1: To manipulate the DOM, you must first finding the HTML element!!!
var outputEl = document.getElementById("output");


// CREATING HTML ELEMENT #1
// Step 2: Create a new HTML paragraph element
var new1El =  document.createElement("p");
// Step 3: Change the html attribute of new1El to say something new.
new1El.innerHTML = "new1El: This is so cool!";


// CREATING HTML ELEMENT #2
// Step 4: Creates a second new HTML paragrpah element
var new2El =  document.createElement("p");
// Step 5: Change the html attribute of new2El to say something new.
new2El.innerHTML = "new2El: This is still super cool :p";


// Step 6: Append the two new HTML paragraph elements one at a time to our output div so it can be displayed on the webpage
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Step 7: Change the CSS attributes of at least two elements of the page
outputEl.style.backgroundColor = "white";
outputEl.style.padding = "10px";
outputEl.style.borderStyle = "solid";
new1El.style.backgroundColor = "#fcebff";
new1El.style.color = "#8902a1";
new2El.style.backgroundColor = "#ffeeab";
new2El.style.color = "#dbaf00";


// BONUS TASK
// Step 7: Create a third new HTML paragraph element
var new3El =  document.createElement("p");
// Step 8: Change the html attribute of new1El to say something new.
new3El.innerHTML = "new3El: This will be appended in front of the other elements";
// Step 9: Append the third new HTML element on top of the output element
outputEl.insertBefore(new3El, new1El);
// Step 10: Change the CSS attributes of new3El
new3El.style.backgroundColor = "#fad7e8";
new3El.style.color = "#f7027d";
