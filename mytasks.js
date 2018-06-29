function mathematics (n) {
	var sum = 0;
	
	while(n != 0) {
		sum = sum + n;
		n--;
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