function numberFactorial (number) {

	if (number > 0 && number <= 1) {
		return 1;
	} else {
		return number * numberFactorial(number - 1);
	}
	}

var x = numberFactorial(10);
console.log(x);