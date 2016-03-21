var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var text = prompt("What calcution you like to do?")
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));


if (text == "multiply") {
	alert(multiply(number1, number2));
}
if (text == "add") {
	alert(add(number1, number2));
}
if (text == "subtract"){
	alert(subtract(number1, number2));
}
if (text == "divide"){
	alert(divide(number1, number2));
}
