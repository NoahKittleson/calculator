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

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		//read which radio is selected
		var operator = $("input:radio[name=operator]:checked").val();
		//if statemets for each option
		var result = 0;
		if (operator ===  "add") {
			result = add(number1, number2);
		}
		if (operator ===  "subtract") {
			result = subtract(number1, number2);
		}
		if (operator ===  "multiply") {
			result = multiply(number1, number2);
		}
		if (operator ===  "divide") {
			result = divide(number1, number2);
		}
		$("#output").text(result);
	});
});
