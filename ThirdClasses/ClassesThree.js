// JavaScript Document

/***** Functions **/


/*
function calculateAge(birthYear){
	return 2019 - birthYear;
	
}


var ageJohn = calculateAge(1990);

var ageMike = calculateAge(1958);

var ageJane = calculateAge(1980);


console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if(retirement > 0){
		console.log(firstName + " retires in " + retirement + " years.");
	} else {
		console.log(firstName + " is already retired.")
	}

}

yearsUntilRetirement(1990, 'John');

yearsUntilRetirement(1969, 'Mike');

yearsUntilRetirement(1954, 'Ann');

*/


/**** Function Statements and Expressions ***/

// Function declaration
//// function whatDoYouDo(job, firstName){}


//Function expression

/*
var whatDoYouDo = function(job, firstName) {
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code.';
		case 'driver':
			return firstName + ' drives a cab in Florida.'
		case 'designer':
			return firstName + ' designs beautiful websites.';
		default:
			return firstName + ' does something else.';
	}
}

console.log(whatDoYouDo('teacher', 'John'));

console.log(whatDoYouDo('designer', 'Jane'));

console.log(whatDoYouDo('retired', 'Mark'));

*/


/***************** Arrays ************************/


// Initialize new array 
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types 

var john = ['John', 'Smith', 1990, 'designer', false];


john.push('blue');
john.unshift('Mr.');

john.pop();
john.pop();
john.shift();

console.log(john);

var isDesignerJohn = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.';


console.log(isDesignerJohn);































































