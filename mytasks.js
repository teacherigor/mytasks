function numberToPower (number, power) {

	var i = 1;
	var result = 1;

	while (i < power) {
		result = result * number;
		i++;
	}

	return result;
}

var x = numberToPower(6, 6);
console.log(x);