function numberOfNumbers (a, b) {
	var counter = 1;
	var number;
	
	while(a > 1) {
		number = a % b;
		if(number == 0) counter = counter + number;
		a--;	
	}
		
	return counter;
}

var x = numberOfNumbers(11, 3);
console.log(x);

// HW There are numbers a and b in the function. Count a number of numbers from 1 to a which don't have a division remainder;