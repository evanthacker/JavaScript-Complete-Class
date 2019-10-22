/* Coding Challenge 4 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height.

2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method. 

3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI. 

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

GOOD luck :*D

*/


var johnheight = prompt("What is John's height? (height in meters)");


var johnMass = prompt("What is John's mass? (mass in kg)");


var markHeight = prompt("What is Mark's height? (height in meters)");

var markMass = prompt("What is Mark's mass? (mass in kg)");

var john = {
	firstName: 'John',
	lastName: 'Smith',
	height: 0, 
	mass: 0,
	calBMI: function() {
		this.BMI = this.mass / (this.height * this.height);
	}
}

john.height = johnheight;
john.mass = johnMass;
john.calBMI();

var mark = {
	firstName: 'Mark',
	lastName: 'Sweet',
	height: 0,
	mass: 0,
	calBMI: function() { 
		this.BMI = this.mass / (this.height * this.height);
	}
}

mark.height = markHeight;
mark.mass = markMass;
mark.calBMI();

if(mark.BMI > john.BMI) {
	alert(mark.firstName + ' ' + mark.lastName + ' has a BMI of: ' + mark.BMI + '. ' + 'Mark\'s BMI is higher than John\'s.')
} else if (mark.BMI < john.BMI) {
	alert(john.firstName + ' ' + john.lastName + ' has a BMI of: ' + john.BMI + '. ' + 'John\'s BMI is higher than Mark\'s.')
} else {
	alert(mark.firstName + ' ' + mark.lastName + ' has a BMI of: ' + mark.BMI + '. ' + john.firstName + ' ' + john.lastName + ' has a BMI of: ' + john.BMI + '. ' + 'John\'s BMI and Mark\'s BMI are the same.')
}

