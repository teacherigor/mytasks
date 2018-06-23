function numberFactorial (number) {
	var result = 1;
	var halfNumber = number/2;
	var n = number;
	
	while(n >= 1) {
		
		result = result * n--;

		if(number > 10 && n <= halfNumber) return result;
		
	}
	
	
	return result;
}

var x = numberFactorial(11);
console.log(x);

// HW There are numbers a and b in the function. Count a number of numbers from 1 to a which don't have a division remainder;