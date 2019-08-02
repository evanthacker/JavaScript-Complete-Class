/******************************
*CODING CHALLENGE
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height*2 = mass /(height * height).
(mass in kg and height in meters);

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs.

3. Create a boolean varible containing information about whether Mark has a higher BMI than John.

4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

var JohnsBmi, JohnsMass, JohnsHeight, MarksBmi, MarksMass, MarksHeight, CompareBmi;

JohnsHeight = prompt("What is John's height? (height in meters)");


JohnsMass = prompt("What is John's mass? (mass in kg)");


MarksHeight = prompt("What is Mark's height? (height in meters)");

MarksMass = prompt("What is Mark's mass? (mass in kg)");


MarksBmi = MarksMass / (MarksHeight * MarksHeight);
							   

JohnsBmi = JohnsMass / (JohnsHeight * JohnsHeight);


CompareBmi = MarksBmi > JohnsBmi;


console.log("John's BMI Is: " + JohnsBmi);

console.log("Mark's BMI Is: " + MarksBmi);


console.log('Is Mark\'s BMI higher than John\'s? ' + CompareBmi);


