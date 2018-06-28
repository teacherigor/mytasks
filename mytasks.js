function numberOfNumbers(a, b) {
	var counter = 0;
	var initialA = a;
	
	while(a > 1) {
		if(a % b == 0) counter++;
		a--;
	}
	
	console.log('My numbers are ' + initialA + ' and ' + b);
	
	return counter;
}

var x = numberOfNumbers(15, 2);
console.log(x);

//