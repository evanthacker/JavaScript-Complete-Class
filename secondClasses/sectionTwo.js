// JavaScript Document

/* If / else statements */

/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon!');
}


*/

/**** Boolean logic */

/*

var firstName = 'John';

var age = prompt("What is John's age?");

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){ //Between ages 13 and 20
console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
			   console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
}

*/


/******* The Ternary Operator and Switch Statements */

var firstName = prompt('What is your first name?');

var age = prompt('How old is ' + firstName + '?');

age >= 21 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 21 ? 'beer' : 'juice';
















