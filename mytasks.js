function numberToPower(number, power){
	var i = 1;
	var result = 1;
	
	
	while (i < power) {
		result = result * number;
		i++;
		console.log('while loop',result, i)
	}
	
	
	return result; 
}

var fiveToThirdPower = numberToPower(5, 7);

console.log('result',fiveToThirdPower);

/* HW: реалізувати функцію, яка зводить число в степінь */
