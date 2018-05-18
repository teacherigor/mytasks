var x = 5;
var y = 20;
var text = ", ";
var result = "";


// if (x <= y) {
// 	console.log(x++ + text);
// } else {
// 	alert("Are you nuts?");
// }


while (x <= y) {
	result = result + x++ + text;
	
}

console.log(result);

