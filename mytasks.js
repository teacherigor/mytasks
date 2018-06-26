function numberOfNumbers (a, b) {


	var counter = 0;
	var c = a % b;
	
	while(a <= b)	{

		if(c == 0) counter = counter + c;
		a++;
	}
	return counter;
}

var x = numberOfNumbers(1, 10);

console.log(x);

// HW There are numbers a and b in the function. Count a number of numbers from 1 to a which don't have a division remainder;