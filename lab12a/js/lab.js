// create a house sort function
function houseSort(name) {
	// get length of name
  var length = name.length;
  // get modulus of name
  var mod = length % 4;
  debugger;
  // choose a house
  if (mod == 0) {
  	var house = "Ravenclaw"
  } else if (mod == 1) {
  	var house = "Hufflepuff"
  } else if (mod == 2) {
  	var house = "Slytherin"
  } else {
  	var house = "Gryffindor"
  }
  return house;
}


// add a click handler for button
$("#sort").click(function(){
	// get input from field
  var name = $("#name").val();
  console.log("name: " + name);
  // sort results
  var result = houseSort(name);
  console.log("result: " + result);
  // output the result on webpage
  $("#sorted").html("Your house is: " + result);
})
