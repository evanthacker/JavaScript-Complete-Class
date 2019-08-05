// JavaScript Document

/* CODING CHALLENGE 2 */



/*
John and Mike both play Basketball on different teams. In the latest 3 games, John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points. 

1. Calculate the average score for each team.

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem. :D


5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK :D
*/

var TeamOne = "John";

var TeamTwo = "Mike";

var TeamThree = "Mary";



var TeamOneFirst = 89;

var TeamOnesecond = 120;
	
var TeamOneThird = 103;

var TeamOnesum = TeamOneFirst + TeamOnesecond + TeamOneThird;

var TeamOneAverage = TeamOnesum / 3;

console.log(TeamOne + " has an average score of:" + TeamOneAverage);


var TeamTwoFirst = 116;

var TeamTwosecond = 94;

var TeamTwoThird = 123;


var TeamTwosum = TeamTwoFirst + TeamTwosecond + TeamTwoThird;

var TeamTwoAverage = TeamTwosum / 3; 


console.log(TeamTwo + " has an average score of:" + TeamTwoAverage);



var TeamThreeFirst = 97;

var TeamThreesecond = 134;

var TeamThreeThird = 105;

var TeamThreesum = TeamThreeFirst + TeamThreesecond + TeamThreeThird;


var TeamThreeAverage = TeamThreesum / 3; 


console.log(TeamThree + " has an average score of:" + TeamThreeAverage);


if (TeamOneAverage > TeamTwoAverage && TeamOneAverage > TeamThreeAverage) {
	console.log(TeamOne + " Wins!");
} else if (TeamTwoAverage > TeamOneAverage && TeamTwoAverage > TeamThreeAverage){
console.log(TeamTwo + " Wins!");
} else if (TeamThreeAverage > TeamOneAverage && TeamThreeAverage > TeamTwoAverage){
console.log(TeamThree + " Wins!");
}	else {
	console.log("It's a draw.");
}
















