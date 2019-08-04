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

/*


var firstName = prompt('What is your first name?');

var age = prompt('How old is ' + firstName + '?');

/*Ternary operator */

/*

age >= 21 ? /* if statement */ /*
console.log(firstName + ' drinks beer.')
: /* else statement */ /* console.log(firstName + ' drinks juice.');

/*Ternary assigned to varable */ 
/*

var drink = age >= 21 ? 'beer' : 'juice';

console.log(drink);


/*If else for Comparision - same*/

/*

if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';
}

***/

/**** switch statements */
/*

var job = prompt('What is your job?');

switch (job){
	case 'teacher':
	case 'professor':
			console.log(firstName + ' teaches kids how to code.');
			break;
	case 'driver':
			console.log(firstName + ' drives a lift in Tampa.');
			break;
	case 'designer':
			console.log(firstName + ' designs UI/UX for major web company.');
			break;
	default:
		console.log(firstName + ' works somewhere else.');
}


switch(true){
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.');
		break;
	case age >= 20 && age > 30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}


*/



/* Truthy and Falsy values and equality operators */

// falsy values: undefined, null, 0, '', NaN

// truthy vales: NOT Falsy 






