var x = 10;
var y = 0;
var divisionColumn = "";
var divisionRow = "";
var separate = ", ";

for (x; x > y; x--) {
divisionColumn = x / 10;
console.log(divisionColumn);
divisionRow = divisionRow + divisionColumn + separate;
}

console.log(divisionRow);






// HW for x = 10; y = 0: printout = every number divided by 10; initially in a column, then in a row