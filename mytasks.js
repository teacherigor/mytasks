function numberOfNumbers(a, b) {
	var counter = 0;
	var initial_a = a;
	
	while(a > 1) {
		if(a % b == 0) counter++;
		a--;
	}
	
	console.log('My numbers are ' + initial_a + ' and ' + b);
	
	return counter;
}

var x = numberOfNumbers(15, 2);
console.log(x);
