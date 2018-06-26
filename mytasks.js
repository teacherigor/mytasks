function numberOfNumbers (a, b) {
	var counter = 0;
	
	while(a > 1)	{
		
		if(a % b == 0) counter++;
		a--;
		
	}

	return counter;
}

var x = numberOfNumbers(10, 2);

console.log(x);

// HW There are numbers a and b in the function. Count a number of numbers from 1 to a which don't have a division remainder;