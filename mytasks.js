var x = 1;
var y = 10;
var comma = ", ";
var fullStop = ". ";
var result = "";

while(x <= y) {
	result = result + x++ + comma;
	if(x == y) {
		result = result + x++ + fullStop;
	}
}

console.log(result);