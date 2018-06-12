function numberToPower(number, power){
	var i = 1;
	var result;
	
	
	while (i < power) {
		result = result * number;
		i++;
	}
	
	
	return result; 
}

var fiveToThirdPower = numberToPower(5, 7);

console.log(fiveToThirdPower);

/* HW: реалізувати функцію, яка зводить число в степінь */
