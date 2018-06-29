function mathematics (n) {
	var counter = 1;
	var addition;
	var sum;
	
	while(counter < n) {
		addition = counter + 1;
		sum = counter + addition;
		counter++;
	}
	
	console.log('Your number is 5.');
	console.log("I've calculated from 1 to 5.");
	console.log('Sum is ' + sum);
	console.log('Division is ');
	console.log('Multiplication is ');
	console.log('Subtraction is ');

}

var x = mathematics(5);
console.log(x);