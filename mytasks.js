function mathematics (n) {
	var counter = 0;
	var sum;
	
	while(counter < n) {
		sum = counter + 1;
		counter++;
	}
	
	console.log('Your number is 5.');
	console.log("I've calculated from 1 to 5.");
	console.log('Sum is ' + sum);
	console.log('Division is ');
	console.log('Multiplication is ');
	console.log('Subraction is ');

}

var x = mathematics(5);
console.log(x);