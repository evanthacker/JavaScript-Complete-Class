/* Reviewing Variables and data Types */


/* 


var firstName = 'John';

console.log(firstName);

var lastName = 'Smith';

console.log(lastName);

var age = 28;

console.log(age);

var fullAge = true;



//Job Declaried

var job;

job = 'Teacher';

console.log(job);



//Variable naming rules

var _3years = 3;
var johnMark = 'John and Mark';
var $if = 23;

*/



/****Reviewing Variable Mutation and Type Coercion****/

var firstName = 'John';
var age = 28;



/// console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';


console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);



var lastName = prompt('What is his last Name?')
console.log(firstName + ' ' + lastName);
