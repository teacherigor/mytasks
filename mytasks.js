function mathematics (n) {
	var counter = 1;
	var sum = 0;
	var division = 1;
	var multiplication = 1;
	var subtraction = 1;
	
	while(counter <= n) {
		sum = sum + counter;
		division = division / counter;
		multiplication = multiplication * counter;
		subtraction = subtraction - counter;
		counter++;

	}
	
	console.log("I've calculated from 1 to " + n);
	console.log('Sum is ' + sum);
	console.log('Division is ' + division);
	console.log('Multiplication is ' + multiplication);
	console.log('Subtraction is ' + subtraction);

}

mathematics(7);