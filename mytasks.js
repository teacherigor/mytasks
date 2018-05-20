var start = 5;
var y = 20;
var text = ", ";
var result = "";

for(var x = start; x <= y; x++) {
	result = result + x;
	if (x < y) {
		result = result + text;
	}
}

if (start > y) {
	console.log('Something is wrong, bro!');
} else {
	console.log(x);
	console.log(result);	
}

// HW for x = 10; y = 0: printout = every number divided by 10; спочатку встовпчик, а потім врядочок