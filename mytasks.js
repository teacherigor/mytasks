function numberFactorial (number) {
	var result = 1;
		
	for(number; number >= 1; number--) {
		
		result = result * number;

	/* result = result * 10;
	result = result * 9;
	result = result * 8;		 */
		
		// number--
	}
	return result;
}

var x = numberFactorial(10);
console.log(x);

// HW numberFactorial with while; multiply only down to the half of the number