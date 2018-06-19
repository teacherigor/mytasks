function numberFactorial (number) {
	var result = 1;
	var halfNumber = number/2;
	
	while(number >= 1) {
		
		result = result * number--;

	if(number <= halfNumber) return result;
		
	}
	return result;
}

var x = numberFactorial(4);
console.log(x);

// HW numberFactorial with while; multiply only down to the half of the number if number is more than 10;